import { ResponseINT } from '@/interface';
import { request } from '@umijs/max';

type PromiseResINT = Promise<ResponseINT>;
type PromiseResDataINT = Promise<any[]>;

export const checkStatusApi = async (): PromiseResINT => {
  return await request('/checkStatus');
};
