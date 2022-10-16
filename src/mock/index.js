import Mock from 'mockjs';

// 获取当前所有同级js文件
const modules = import.meta.glob('./*.js');

for (const key in modules) {
  modules[key]().then(res => {
    let arr = res.default; // 获取每个模块的接口集合

    for(let i = 0, len = arr.length; i < len; i++) {
      let item = arr[i];
      Mock.mock(item.url, item.method, item.response)
    }
  })
}

Mock.setup({
  timeout: 1000
})

console.log(Mock, 'Mock')