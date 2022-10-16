
export const setStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
  return true;
}

export const getStorage = (key) => {
  let data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : false;
}

export const getData = (key, defaultValue = '') => {
  let data = getStorage(key);
  return data ? data : defaultValue;
}