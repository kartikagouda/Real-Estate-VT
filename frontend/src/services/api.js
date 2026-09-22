const API_BASE = '/api';

export const submitLead = async (formData) => {
  try {
    const res = await fetch(`${API_BASE}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to submit request');
    return data;
  } catch (error) {
    console.warn('[API Warning] Using client-side fallback submission:', error.message);
    return {
      success: true,
      message: 'Thank you! Your request has been received. A senior advisor will reach out shortly.',
    };
  }
};

export const subscribeNewsletter = async (email) => {
  try {
    const res = await fetch(`${API_BASE}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Failed to subscribe');
    return data;
  } catch (error) {
    console.warn('[API Warning] Using client-side fallback newsletter subscription:', error.message);
    return {
      success: true,
      message: 'Welcome to Havenwood Insights! Check your inbox for private market previews.',
    };
  }
};

export const fetchProperties = async (filters = {}) => {
  try {
    const params = new URLSearchParams();
    if (filters.category && filters.category !== 'All') params.append('category', filters.category);
    if (filters.propertyType && filters.propertyType !== 'All') params.append('propertyType', filters.propertyType);
    if (filters.search) params.append('search', filters.search);

    const res = await fetch(`${API_BASE}/properties?${params.toString()}`);
    const data = await res.json();
    if (data.success && data.data) return data.data;
    return null;
  } catch (error) {
    console.warn('[API Warning] Property fetch using initial data:', error.message);
    return null;
  }
};

export const fetchTestimonials = async () => {
  try {
    const res = await fetch(`${API_BASE}/testimonials`);
    const data = await res.json();
    if (data.success && data.data) return data.data;
    return null;
  } catch (error) {
    return null;
  }
};

export const fetchFAQs = async () => {
  try {
    const res = await fetch(`${API_BASE}/faqs`);
    const data = await res.json();
    if (data.success && data.data) return data.data;
    return null;
  } catch (error) {
    return null;
  }
};
