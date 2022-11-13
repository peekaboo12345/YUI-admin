export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return true;
};

export const getStorage = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

// 获取存在base内的数据
export const getBase = (key, defaultValue = '') => {
  let data = getStorage('base');
  return data[key] ? data[key] : defaultValue;
};
