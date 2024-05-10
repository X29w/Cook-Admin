import { ListParamsINT, ResponseINT } from '@/interface';
import { request } from '@umijs/max';

type PromiseResINT = Promise<ResponseINT>;
// type PromiseResDataINT = Promise<any[]>;

export const checkStatusApi = async (): PromiseResINT => {
  return await request('/');
};

export const getfoodList = async (
  params: ListParamsINT,
  url: string,
): PromiseResINT => {
  return await request(url, {
    method: 'GET',
    params,
  });
};
