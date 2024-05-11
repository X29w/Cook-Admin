// 运行时配置

import { RequestConfig, history } from '@umijs/max';
import { message } from 'antd';
import { retrieveItemFromLocal } from './utils';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '' };
}

export const layout = () => {
  return {
    logo: false,
    menu: {
      locale: false,
    },
  };
};

const baseURLInterceptor = (url: null | string, options: any) => {
  return {
    url: `http://127.0.0.1:3005${url}`,
    options: {
      ...options,
      interceptors: true,
      headers: {
        Authorization: 'Bearer ' + retrieveItemFromLocal('Authorization'),
      },
    },
  };
};

const errorHandler = (err: any) => {
  console.log('err', err);
  if (err.response.data.code === 401) {
    history.push('/login');
  }
  message.error(err.response.data.data);
};

export const request: RequestConfig = {
  errorConfig: {
    errorHandler,
  },
  requestInterceptors: [baseURLInterceptor],
};
