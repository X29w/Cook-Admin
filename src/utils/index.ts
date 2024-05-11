import { v4 as uuid } from 'uuid';

//#region 获得uuid
/**
 * 获得uuid
 *
 */
export const getUUid = () => uuid();
//#endregion

//#region 本地存储
/**
 * 保存数据到本地
 *
 * @param {string} storageKey
 * @param {string} itemValue
 * @return {*}
 */
export const saveItemToLocal = (storageKey: string, itemValue: string) => {
  if (!itemValue) return;
  const serializedValue = JSON.stringify(itemValue);
  window.localStorage.setItem(storageKey, serializedValue);
};
//#endregion

//#region 取出本地存储
/**
 * 从本地获取数据
 *
 * @param {string} storageKey
 * @return {*}
 */
export const retrieveItemFromLocal = (storageKey: string) => {
  const rawValue = window.localStorage.getItem(storageKey);
  if (rawValue) {
    try {
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(
        'retrieveItemFromLocal - Error parsing stored value:',
        error,
      );
    }
  }
  return rawValue;
};
//#endregion
