import React from 'react'
import useRecoilStates from '../../hook/useRecoilStates'

export default function DisplayRecoilState() {
  const { tab } = useRecoilStates()
  return (
    <div>
      <h2>{JSON.stringify(tab, null, 2)}</h2>
    </div>
  )
}
