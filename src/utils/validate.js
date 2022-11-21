// 判断是否为链接
export function isLink (val) {
  return /http[s]?:\/\//.test(val);
};

// 手机号
export function phone(val){
  return /^1[3-9]\d{9}$/.test(val)
}

// 座机
export function tel(val) {
  return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(val)
}

// 邮箱
export function email(val) {
  return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(val)
}

// 身份证
export function card(val) {
  return /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/.test(val)
}
