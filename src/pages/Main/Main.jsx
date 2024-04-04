import React from 'react'
import Feature from '../../components/Feature'
import PostCard from '../../components/PostCard'

function Home() {
  return (
    <div>
      <Feature post_id={1} />
      <main className='posts'>
        {/* Yeah, a very silly approach */ }
        {(() => {
          const elements = []

          for (let i = 2; i < 10; ++i)
            elements.push(<PostCard key={i} post_id={i} />)

          return elements
        })()}
      </main>
    </div>
  )
}

export default Home
