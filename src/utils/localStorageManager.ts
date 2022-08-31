const storage = localStorage;

export const getItem = (key: string, defaultValue: unknown) => {
  try {
    const value = storage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export const setItem = (key: string, value: unknown) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // no op
  }
};

export const removeItem = (key: string) => {
  try {
    storage.removeItem(key);
  } catch (e) {
    // no op
  }
};

export const clearItem = () => {
  try {
    storage.clear();
  } catch (e) {
    // no op
  }
};
