// localStorage
export const setL = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return true;
};

export const getL = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};

export const setS = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
  return true;
};

export const getS = (key) => {
  let data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : false;
};


// ##############################################  以下为当前项目使用  #################################################
// 获取存在base内的数据
export const getBase = (key, defaultValue = '') => {
  let data = getL('base');
  return data[key] ? data[key] : defaultValue;
};
