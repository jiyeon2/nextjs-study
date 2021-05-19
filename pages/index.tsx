import {
  // InfiniteData,
  useInfiniteQuery,
  useMutation,
  //  useQuery,
  useQueryClient,
} from 'react-query'
import axios from 'axios'

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

type Users = {
  data: UserData[]
  page: number
  per_page: number
  support: Support
  total: number
  total_pages: number
}

// const fetchUsers = async () => {
//   const res = await axios.get('/api/users')
//   if (res.status !== 200) {
//     throw new Error('error in fetchUsers')
//   }
//   return res.data
// }
const fetchInfiniteUsers = async ({ pageParam = 1 }) => {
  const res = await axios.get(`/api/users?page=${pageParam}`)
  if (res.status !== 200) {
    throw new Error('error in fetchUsers')
  }
  return res.data
}
const addUser = async (user: { first_name: string; last_name: string }) => {
  const res = await axios.post('/api/users', {
    first_name: user.first_name,
    last_name: user.last_name,
  })

  if (res.status !== 201) {
    throw new Error('error in addUser')
  }
  return res.data
}

function App(): JSX.Element {
  const queryClient = useQueryClient()

  // const {
  //   data: users,
  //   isLoading,
  //   error,
  //   //  refetch
  // } = useQuery<Users, ErrorConstructor>('users', fetchUsers, {
  //   enabled: true, // 자동 refetch
  //   refetchOnWindowFocus: false, // 윈도우 포커스시 refetch 안하도록
  //   refetchInterval: false,
  // })
  const {
    data: users,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
    error,
  } = useInfiniteQuery<Users, ErrorConstructor>('users', fetchInfiniteUsers, {
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) return lastPage.page + 1
      return false // hasNextPage = false
    },
  })
  const {
    // mutate,
    mutateAsync,
    isLoading: isAddingUser,
    // error: addError,
  } = useMutation(addUser)

  const handleAddUser = async () => {
    const newUser = await mutateAsync({ first_name: 'test', last_name: 'user' })
    console.log(newUser)
    queryClient.invalidateQueries('users') // 'users'쿼리 폐기하고 알아서 refetch 함 = 다시 get /users 요청하는것
    // 전체 데이터를 다시 요청하지 않고, 캐시된 데이터에 새로 생성된 데이터를 추가함
    // queryClient.setQueriesData<Users | undefined>('users', (oldData) => {
    //   if (oldData) {
    //     return {
    //       ...oldData,
    //       data: [...oldData.data, newUser],
    //     }
    //   }
    // })

    // infiniteQueryData 타입 확인 못함..
    // const newPagesArray: UserData[] = []
    // oldPagesArray?.pages.forEach((page) => {
    //   const newData = page.filter((val) => val.id !== updatedId)
    //   newPagesArray.push(newUser)
    // })
    // queryClient.setQueryData<InfiniteData<Users>>('projects', (data) => {
    //   return ({
    //     pages: newPagesArray,
    //     pageParams: data.pageParams,
    //   }))
    // }
  }

  if (isLoading) return <p>Loading...</p> // 맨처음 fetching 일때만 true
  if (error) return <p>there is a error...</p>
  if (!users) return <p>no data fetched</p>
  console.log(users)

  return (
    <div>
      <p>react query</p>
      {isAddingUser && <p>adding user</p>}
      <button onClick={handleAddUser}>add user</button>
      {/* {users &&
        users.data.map((user) => (
          <p key={user.id}>
            {user.first_name} {user.last_name}
          </p>
        ))} */}

      {users &&
        users.pages.map((page) => page.data.map((user) => <p key={user.id}>{user.first_name}</p>))}
      {/* isFetching : 최초 fetch 이후 refetch 일때 true*/}
      {isFetching && <p>fetching...</p>}
      {hasNextPage && <button onClick={() => fetchNextPage()}>LoadMore</button>}
    </div>
  )
}

export default App
