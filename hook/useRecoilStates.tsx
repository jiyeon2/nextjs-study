import { SetterOrUpdater, useRecoilState, useRecoilValue } from 'recoil'
import { columnAtom, categoryAtom, platformAtom, tabSelector } from '../states/recoil'

export default function useRecoilStates(): {
  column: string
  setColumn: SetterOrUpdater<string>
  category: string
  setCategory: SetterOrUpdater<string>
  platform: string
  setPlatform: SetterOrUpdater<string>
  tab: {
    column: string
    category: string
    platform: string
  }
} {
  const [column, setColumn] = useRecoilState(columnAtom)
  const [category, setCategory] = useRecoilState(categoryAtom)
  const [platform, setPlatform] = useRecoilState(platformAtom)
  const tab = useRecoilValue(tabSelector)
  // const list = use
  return {
    column,
    setColumn,
    category,
    setCategory,
    platform,
    setPlatform,
    tab,
  }
}
