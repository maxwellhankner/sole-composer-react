export const findValuesOfKey = (obj, match) => {
  const array = [];
  const recurse = (obj, current) => {
    for (const key in obj) {
      const value = obj[key];
      if (value !== undefined) {
        if (value && typeof value === 'object') {
          recurse(value, key);
        } else {
          if (key === match) {
            array.push(value);
          }
        }
      }
    }
  };
  recurse(obj);
  return array;
};
