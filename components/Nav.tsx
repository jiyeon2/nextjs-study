import Link from 'next/link'
import React from 'react'

export default function Nav(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/image">
            <a>image</a>
          </Link>
        </li>
        <li>
          <Link href="/infinite">
            <a>useInfiniteQuery</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
