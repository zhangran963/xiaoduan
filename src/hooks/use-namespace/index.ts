// Copyright (c) 2020-PRESENT Element Plus

import { unref, computed } from 'vue'

interface Opts {
  defaultNamespace: string
  statePrefix: string
}

export const createNamespaceHook = (opts?: Opts) => {
  const { defaultNamespace = 'duan', statePrefix = 'is-' } = opts || {}
  const _bem = (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string
  ) => {
    let cls = `${namespace}-${block}`
    if (blockSuffix) {
      cls += `-${blockSuffix}`
    }
    if (element) {
      cls += `__${element}`
    }
    if (modifier) {
      cls += `--${modifier}`
    }
    return cls
  }
  const useNamespace = (block: string) => {
    const namespace = computed(() => defaultNamespace)
    const b = (blockSuffix = '') => _bem(unref(namespace), block, blockSuffix, '', '')
    const e = (element?: string) => (element ? _bem(unref(namespace), block, '', element, '') : '')
    const m = (modifier?: string) =>
      modifier ? _bem(unref(namespace), block, '', '', modifier) : ''
    const be = (blockSuffix?: string, element?: string) =>
      blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, '') : ''
    const em = (element?: string, modifier?: string) =>
      element && modifier ? _bem(unref(namespace), block, '', element, modifier) : ''
    const bm = (blockSuffix?: string, modifier?: string) =>
      blockSuffix && modifier ? _bem(unref(namespace), block, blockSuffix, '', modifier) : ''
    const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
      blockSuffix && element && modifier
        ? _bem(unref(namespace), block, blockSuffix, element, modifier)
        : ''
    const is: {
      (name: string, state: boolean | undefined): string
      (name: string): string
    } = (name: string, ...args: [boolean | undefined] | []) => {
      const state = args.length >= 1 ? args[0]! : true
      return name && state ? `${statePrefix}${name}` : ''
    }
    return {
      namespace,
      b,
      e,
      m,
      be,
      em,
      bm,
      bem,
      is,
    }
  }
  return useNamespace
}

export const useNamespace = createNamespaceHook()
