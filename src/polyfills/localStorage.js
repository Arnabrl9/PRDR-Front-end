// Polyfill for localStorage in Node.js environment
if (typeof global !== 'undefined' && !global.localStorage) {
  const storage = {};
  
  global.localStorage = {
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
}

module.exports = global.localStorage;


