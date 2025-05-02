"use client";
const storage = {
  setItem: (key: string, value: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  getItem: (key: string) => {
    if (typeof window !== "undefined") {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : null;
    }
    return null;
  },

  removeItem: (key: string) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },
};

export default storage;
