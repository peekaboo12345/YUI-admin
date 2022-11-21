
// 生成指定长度的随机字符串
export const uuid = (num) => {
  let library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";
  for(let i = 0; i < library.length; i++){
    let index = Math.round(Math.random() * library.length);
    key += library.substring(index, index + 1)
  }
  return key
}

// 防抖
export const debounce = (fn, delay = 300) => {
  let timer = null;
  return function () {
    let arg = arguments;
    let that = this;
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn.apply(that, arg);
    }, delay);
  };
};

// 节流
export const throttle = (fn, delay = 300) => {
  let timer = null;
  return function () {
    let arg = arguments;
    let that = this;
    if (timer) return;
    timer = window.setTimeout(() => {
      fn.apply(that, arg);
      timer = null;
    }, delay);
  };
};
