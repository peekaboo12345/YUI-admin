export const token = '123456789123456789';

export const userData = {
  username: '测试账号',
  id: 1,
  icon: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202010%2F13%2F20201013234041_31496.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668154498&t=3bf94ef792962e023c7858e1b2af2cd6',
}

// name 属性必须配置并且不能重复，这是用于menu的唯一性和keep-alive的缓存,本项目的跳转也都是由name跳转的
// 为何不用path跳转？？？？  原因还是element-plus的menu组件之前可以用path当index，我这里就是不行，只能用name
export const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      isFixed: true,
    },
    component: 'home'
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      icon: 'Aim',
      title: '测试'
    },
    children: [
      {
        path: '/test1',
        name: 'test1',
        meta: {
          title: '测试1'
        },
        component: 'test'
      },
      {
        path: '/test2',
        name: 'test2',
        meta: {
          title: '测试2'
        },
        component: 'test'
      }
    ]
  },
  {
    path: 'http://www.baidu.com',
    meta: {
      title: '百度',
    },
  }
]