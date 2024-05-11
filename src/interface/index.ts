import { ActionType, ProCoreActionType } from '@ant-design/pro-components';
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

export type foodCreateFetchUrl = '/vegetable/create' | '/fruit' | '/meat';

export interface FoodParamsINT {
  name: string;
  price: number;
  image?: string;
  description?: string;
  shelfLife: string;
}

export interface FoodModalINT {
  buttonText?: string;
  modalTitle?: string;
  key?: React.Key;
  url?: foodCreateFetchUrl;
  action?: ActionType;
}

export type TabelColumnsAction = ProCoreActionType | undefined;
