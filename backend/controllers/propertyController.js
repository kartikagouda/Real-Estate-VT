import Property from '../models/Property.js';
import { initialProperties } from '../seed/seedData.js';
import { getDBStatus } from '../config/db.js';

export const getProperties = async (req, res, next) => {
  try {
    const { category, propertyType, search } = req.query;

    if (getDBStatus()) {
      let query = {};
      if (category && category !== 'All') query.category = category;
      if (propertyType && propertyType !== 'All') query.propertyType = propertyType;
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
          { city: { $regex: search, $options: 'i' } },
        ];
      }
      const properties = await Property.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, count: properties.length, data: properties });
    }

    // Static fallback
    let filtered = [...initialProperties];
    if (category && category !== 'All') {
      filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    if (propertyType && propertyType !== 'All') {
      filtered = filtered.filter((p) => p.propertyType.toLowerCase() === propertyType.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q)
      );
    }
    return res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    next(error);
  }
};

export const getPropertyBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    if (getDBStatus()) {
      const property = await Property.findOne({ slug });
      if (!property) {
        return res.status(404).json({ success: false, message: 'Property not found' });
      }
      return res.json({ success: true, data: property });
    }

    const property = initialProperties.find((p) => p.slug === slug);
    if (!property) {
      return res.status(404).json({ success: false, message: 'Property not found' });
    }
    return res.json({ success: true, data: property });
  } catch (error) {
    next(error);
  }
};
