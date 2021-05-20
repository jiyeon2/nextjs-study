import { atom, selector } from 'recoil'
import axios from 'axios'

export const columnAtom = atom({
  key: 'column',
  default: 'viewer',
})

export const categoryAtom = atom({
  key: 'category',
  default: 'all',
})

export const platformAtom = atom({
  key: 'platform',
  default: 'all',
})

export const tabSelector = selector({
  key: 'tab',
  get: ({ get }) => {
    const column = get(columnAtom)
    const category = get(categoryAtom)
    const platform = get(platformAtom)

    return {
      column,
      category,
      platform,
    }
  },
})

export const listSelector = selector({
  key: 'list',
  get: async ({ get }) => {
    const response = await axios('/list', { params: get(tabSelector) })
    console.log(response)
    return response.data
  },
})
