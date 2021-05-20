import React from 'react'
import useRecoilStates from '../../hook/useRecoilStates'

export default function Buttons(): JSX.Element {
  const { setColumn, setPlatform, setCategory, tab } = useRecoilStates()
  return (
    <div>
      <p>{JSON.stringify(tab, null, 2)}</p>
      <div>
        <button onClick={() => setColumn('viewer')}>viewer</button>
        <button onClick={() => setColumn('rating')}>rating</button>
        <button onClick={() => setColumn('admire')}>admire</button>
      </div>
      <div>
        <button onClick={() => setCategory('all')}>all</button>
        <button onClick={() => setCategory('variety')}>variety</button>
        <button onClick={() => setCategory('game')}>game</button>
      </div>
      <div>
        <button onClick={() => setPlatform('all')}>all</button>
        <button onClick={() => setPlatform('afreeca')}>afreeca</button>
        <button onClick={() => setPlatform('twitch')}>twitch</button>
      </div>
    </div>
  )
}
