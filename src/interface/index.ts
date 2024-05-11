import type { DetailedHTMLProps, HTMLAttributes } from 'react';

/**
 * 定义响应接口
 *
 * @export
 * @interface ResponseINT
 */
export interface ResponseINT {
  success: boolean;
  data: any;
  code: number;
  message: string;
}

/**
 * 定义DOM接口
 *
 * @export
 * @interface CurrencyDOMINT
 * @extends {DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>}
 */
export interface CurrencyDOMINT
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * 定义列表参数接口
 *
 * @export
 * @interface ListParamsINT
 */
export interface ListParamsINT {
  pageSize?: number | undefined;
  current?: number | undefined;
  keyword?: string | undefined;
}

/**
 * 定义登录参数接口
 *
 * @export
 * @interface LoginParamsINT
 */
export interface LoginParamsINT {
  name: string;
  password: string;
}

/**
 * 定义注册参数接口
 *
 * @export
 * @interface RegisterParamsINT
 */
export interface RegisterParamsINT {
  name: string;
  email: string;
  captcha: string;
  password?: string;
  phone: string;
}

export type UserAuthority = LoginParamsINT | RegisterParamsINT;
