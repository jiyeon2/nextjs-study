type UserData = {
  id: number
  avatar: string
  email: string
  first_name: string
  last_name: string
}

type Support = {
  text: string
  url: string
}

type UsersRes = {
  data: UserData[]
  page: number
  per_page: number
  support: Support
  total: number
  total_pages: number
}
const data: UserData[] = [
  {
    id: 1,
    email: 'asdfasdf.weaver@reqres.in',
    first_name: 'test',
    last_name: 'test',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    last_name: 'Wong',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
  },
  {
    id: 4,
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    last_name: 'Holt',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
  },
  {
    id: 5,
    email: 'charles.morris@reqres.in',
    first_name: 'Charles',
    last_name: 'Morris',
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
  },
  {
    id: 6,
    email: 'tracey.ramos@reqres.in',
    first_name: 'Tracey',
    last_name: 'Ramos',
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
  },
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
  },
]
const per_page = 5

import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse<UsersRes | any>) => {
  const { query, method, body } = req
  const page = Number(query.page)
  const start = (page - 1) * per_page
  const end = page * per_page

  const { first_name, last_name } = body

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({
        data: data.slice(start, end),
        page: page,
        per_page,
        support: { text: 'asdf', url: 'asdf' },
        total: data.length,
        total_pages: Math.ceil(data.length / per_page),
      })
      break
    case 'POST':
      // Update or create data in your database
      data.push({
        id: data.length + 1,
        email: 'asdfasdf@reqres.in',
        first_name,
        last_name,
        avatar: 'https://reqres.in/img/faces/12-image.jpg',
      })
      res.status(201).json({
        createdAt: new Date(),
        first_name,
        id: data.length,
        last_name,
      })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
