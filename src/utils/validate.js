// 判断是否为链接
export function isLink(val) {
  return /http[s]?:\/\//.test(val);
};

// 手机号
export function phone(val) {
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

// 密码(至少8位字符且包含一个字母、一个特殊字符、一个数字)
export function pwd(val) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(val)
}

// 是否包含中文
export function cn(val) {
  return /[\u4E00-\u9FA5]/.test(val)
}

// 金额(小数后两位,可以为0)
export function money(val) {
  return /^([0-9]{1}|^[1-9]{1}\d*)(\.\d{1,2})?$/.test(val)
}

/**
 * 对比开始和结束时间
 * @param {*} beginTime 开始时间
 * @param {*} endTime 结束时间
 * @returns 开始时间大于结束时间返回false,小于则返回true
 */
export function timeComparison(beginTime, endTime) {
  let begin = new Date(beginTime).valueOf(),
    end = new Date(endTime).valueOf()
  return begin > end ? false : true;
}

/**
 * 当前日期是否在开始和结束时间范围内
 * @param {*} beginTime 开始时间
 * @param {*} endTime 结束时间
 * @param {*} nowTime 对比时间,不传默认当前时间
 * @returns 不在时间范围内返回false,小于则返回true
 */
export function timeComparison(beginTime, endTime, nowTime) {
  let begin = new Date(beginTime).valueOf(),
    end = new Date(endTime).valueOf(),
    now = now ? new Date(nowTime).valueOf() : new Date().valueOf();
  if (begin < now && now < end) {
    return true
  }
  return false
}

export function empty(str) {
  return !!str.trim()
}