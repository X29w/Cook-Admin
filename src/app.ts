// 运行时配置

import { RequestConfig } from '@umijs/max';

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

const baseURLInterceptor = (
  url: null | string,
  options: any,
) => {
  return {
    url: `http://test${url}`,
    options: { ...options, interceptors: true },
  };
};

export const request: RequestConfig = {
  requestInterceptors: [baseURLInterceptor],
  // errorHandler,
};
