export const isLink = str => {
  return /(http|https):\/\//.test(str);
}
// 防抖
export const debounce = (fn, delay = 300) => {
  let timer = null;
  return function() {
    let arg = arguments;
    let that = this;
    if(timer) window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn.apply(that, arg)
    }, delay)
  }
}
// 节流
export const throttle = (fn, delay = 300) => {
  let timer = null;
  return function() {
    let arg = arguments;
    let that = this;
    if(timer) return;
    timer = window.setTimeout(() => {
      fn.apply(that, arg)
      timer = null;
    }, delay)
  }
}

