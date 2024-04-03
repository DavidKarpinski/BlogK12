import { dateFmt } from '../../scripts/dateFmt'
import { useParams } from 'react-router-dom'
import { fetchPost } from '../../scripts/fetchPost'
import CommentList from '../../components/CommentList/CommentList'
import './Post.css'

function Post() {
  const { id } = useParams()
  const postData = fetchPost(id)

  const { title, body, created_at:date, time_read, image_url } = postData
  console.log('Image URL: ' + image_url)

  return (
    <div className='post-content'>
      <main className='post'>
        <h1 className='post__title'>{title}</h1>
        <p className='post__info'>{time_read} min &bull; {dateFmt(date)}</p>
        <img className='post__picture' src='https://images.unsplash.com/photo-1501504905252-473c47e087f8' alt='none' />
        <p className='post__body'>{body}</p>
      </main>
      <section className='comments-section'>
        <h2 className='comments-section__title'>Comentários:</h2>
        <div className='comments'>
          <CommentList post_id={id} />
        </div>
      </section>
    </div>
  )
}

export default Post