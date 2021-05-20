import React from 'react'
import Header from './Header'

export default function Layout({ children }: { children?: React.ReactNode }): JSX.Element {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}
