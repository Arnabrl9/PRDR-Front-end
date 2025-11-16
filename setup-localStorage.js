// Setup localStorage before webpack runs
// This file should be required before react-scripts starts
// Define localStorage immediately without checking if it exists first

if (typeof global !== 'undefined') {
  const storage = {};
  
  // Create mock localStorage object
  const mockLocalStorage = {
    getItem: function(key) {
      return storage[key] || null;
    },
    setItem: function(key, value) {
      storage[key] = String(value);
    },
    removeItem: function(key) {
      delete storage[key];
    },
    clear: function() {
      Object.keys(storage).forEach(key => delete storage[key]);
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(index) {
      const keys = Object.keys(storage);
      return keys[index] || null;
    }
  };
  
  // Try to delete localStorage first (if it exists) without triggering the getter
  // We'll use Reflect.deleteProperty to avoid triggering the getter
  try {
    Reflect.deleteProperty(global, 'localStorage');
  } catch (e) {
    // Ignore errors when trying to delete
  }
  
  // Define our mock localStorage
  try {
    Object.defineProperty(global, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
      configurable: true,
      enumerable: false
    });
  } catch (e) {
    // If defineProperty fails, try direct assignment
    try {
      global.localStorage = mockLocalStorage;
    } catch (e2) {
      // If that also fails, we've done our best
    }
  }
}

module.exports = global.localStorage || {};
