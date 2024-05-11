import {
  FoodParamsINT,
  ListParamsINT,
  ResponseINT,
  UserAuthority,
  foodCreateFetchUrl,
} from '@/interface';
import { request } from '@umijs/max';

type PromiseResINT = Promise<ResponseINT>;
// type PromiseResDataINT = Promise<any[]>;

export const checkStatusAPI = async (): PromiseResINT => {
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

export const loginUserAPI = async (data: UserAuthority): PromiseResINT => {
  return await request('/user/login', {
    method: 'POST',
    data,
  });
};

export const registerUserAPI = async (data: UserAuthority): PromiseResINT => {
  return await request('/user/create', {
    method: 'POST',
    data,
  });
};

export const createFoodAPI = async (
  url: foodCreateFetchUrl,
  data: Record<string, any> | FoodParamsINT,
): PromiseResINT => {
  return await request(url, {
    method: 'POST',
    data,
  });
};

export const deletefoodAPI = async (url: string): PromiseResINT => {
  return await request(url, {
    method: 'DELETE',
  });
};

export const updateFoodAPI = async (
  url: string,
  data: Record<string, any> | FoodParamsINT,
): PromiseResINT => {
  return await request(url, {
    method: 'PATCH',
    data,
  });
};
