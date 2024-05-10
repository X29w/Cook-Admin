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


