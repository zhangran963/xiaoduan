import { request } from '@/utils'

interface IGetLyricList {
  (): Promise<
    Array<{
      name: string
      filename: string
      url: string
      _source: unknown
    }>
  >
}

export const getLyricList: IGetLyricList = () => {
  return request('/lyric/list').then((res) => res.data)
}
