export const token = '123456789123456789';

export const userData = {
  username: '测试账号',
  userId: '987654321',
  id: 1,
  icon: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202010%2F13%2F20201013234041_31496.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668154498&t=3bf94ef792962e023c7858e1b2af2cd6',
};

// name 属性必须配置并且不能重复，这是用于menu的唯一性和keep-alive的缓存,本项目的跳转也都是由name跳转的
// 为何不用path跳转？？？？  原因还是element-plus的menu组件之前可以用path当index，我这里就是不行，只能用name
export const routes = [
  {
    id: 1,
    path: '/baseHome',
    name: 'baseHome',
    title: '首页',
    isFixed: true,
    component: 'baseHome/index',
    icon: 'i-fangwu',
    type: '1',
  },
  {
    id: 2,
    title: '配置文件',
    icon: 'i-fangwu',
    children: [
      {
        id: 3,
        path: '/eslint',
        name: 'eslint',
        title: 'eslint',
        component: 'eslint/index',
        icon: 'i-fangwu',
        type: '1',
      },
      {
        id: 4,
        title: 'prettier',
        icon: 'i-fangwu',
        children: [
          {
            id: 5,
            path: '/prettierrc',
            name: 'prettierrc',
            title: 'prettierrc',
            component: 'prettierrc/index',
            icon: 'i-fangwu',
            type: '1',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    path: 'https://www.baidu.com',
    name: 'baidu',
    title: '百度',
    icon: 'i-fangwu',
    type: '2',
  },
  {
    id: 7,
    path: '/test',
    name: 'test',
    title: 'test',
    component: 'test/index',
    icon: 'i-fangwu',
    type: '3',
  },
  {
    id: 8,
    path: '/test',
    name: 'test',
    isTip: true,
    title: '这是一个非常非常非常非常非常非常非常非常长的菜单名',
    component: 'test/index',
    icon: 'i-fangwu',
    type: '1',
  },
];
