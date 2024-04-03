import Feature from '../../components/Feature/Feature'
import PostCard from '../../components/PostCard/PostCard'

function Home() {
  const post_id = 1

  return (
    <div>
      <Feature post_id={post_id} />
      <main className='posts'>
        <PostCard post_id={1} />
        <PostCard post_id={2} />
        <PostCard post_id={3} />
      </main>
    </div>
  )
}

export default Home