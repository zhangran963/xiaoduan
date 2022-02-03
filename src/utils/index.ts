import isArray from 'lodash/isArray'
import isNumber from 'lodash/isNumber'
import { isPlainObject } from 'lodash'
export { isArray, isNumber, isPlainObject }

/**
 * 注: 不能放在constants文件; 因为map和store存在依赖关系
 */
import store from '@/store'
export { store }
export function createStoreCommit(name: string) {
  return (val: unknown) => {
    store.commit(name, val)
  }
}

/* 切换state.mode */
export const toggleMode = createStoreCommit('toggleMode')

/* 环境 */
const userAgent = window.navigator.userAgent
const isMobile = /Mobile/.test(userAgent)
const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent)
const isApple = isSafari || /Apple/.test(navigator.vendor)
const isAndroid =
  userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1
const isWechat = /MicroMessenger/.test(userAgent)
export const platform = {
  isApple,
  isAndroid,
  isSafari,
  isMobile,
  isWechat,
}

/* 工具类型: await处理Promise<值>的类型 */
export type Awaited<T> = T extends PromiseLike<infer U> ? U : T

export * from './fetch'
