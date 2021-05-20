import type { NextApiRequest, NextApiResponse } from 'next'

type Item = {
  id: number
  name: string
  viewer: number
  category: string
  platform: string
  rating: number
}
const userList: Item[] = [
  { id: 1, name: 'aaa', viewer: 12, category: 'variety', platform: 'afreeca', rating: 4 },
  { id: 2, name: 'bbb', viewer: 112, category: 'game', platform: 'afreeca', rating: 3 },
  { id: 3, name: 'ccc', viewer: 312, category: 'variety', platform: 'twitch', rating: 2 },
  { id: 4, name: 'ddd', viewer: 142, category: 'game', platform: 'twitch', rating: 1 },
  { id: 5, name: 'eee', viewer: 212, category: 'variety', platform: 'afreeca', rating: 5 },
  { id: 6, name: 'fff', viewer: 112, category: 'game', platform: 'afreeca', rating: 4 },
  { id: 7, name: 'ggg', viewer: 512, category: 'variety', platform: 'twitch', rating: 3 },
  { id: 8, name: 'hhh', viewer: 312, category: 'game', platform: 'twitch', rating: 2 },
]

export default (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { column, category, platform } = req.query

  let data: Item[] = userList
  if (category !== 'all') {
    data = data.filter((item) => item.category === category)
    if (column === 'rating' || column === 'viewer') {
      data = data.sort((a, b) => a[column] - b[column])
    }
  }
  if (platform !== 'all') {
    data = data.filter((item) => item.platform === platform)
    if (column === 'rating' || column === 'viewer') {
      data = data.sort((a, b) => a[column] - b[column])
    }
  }

  res.status(200).json({
    data,
  })
}
