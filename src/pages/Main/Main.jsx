import React from 'react'
import Feature from '../../components/Feature'
import PostCard from '../../components/PostCard'

function Home() {
  const post_ids = [4, 5, 6]
  return (
    <div>
      <Feature post_id={1} />
      <main className='posts'>
        {post_ids.map(post_id => (
          <PostCard key={post_id} post_id={post_id} />
        ))}
        </main>
    </div>
  )
}

export default Home
