import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '方圆小厨房',
  },
  routes: [
    {
      path: '/',
      redirect: '/vegetable-management',
    },
    {
      name: '蔬菜管理',
      path: '/vegetable-management',
      component: './Vegetable',
    },
    {
      name: '水果管理',
      path: '/fruit-management',
      component: './Fruit',
    },
    {
      name: '肉类管理',
      path: '/meat-management',
      component: './Meat',
    },
  ],
  npmClient: 'pnpm',
});
