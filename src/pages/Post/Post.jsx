import { useParams } from 'react-router-dom'
import { fetchPost } from '../../scripts/fetchPost'
import CommentList from '../../components/CommentList'
import TimeInfo from '../../components/TimeInfo'
import SmoothLink from '../../components/SmoothLink'
import './Post.css'

function Post() {
  const { id } = useParams()
  const { title, body, created_at:date, time_read, image_url } = fetchPost(id)

  return (
    <div className='post-content'>
      <main className='post'>
        <h1 className='post__title'>{title}</h1>
        <TimeInfo _class={'post__info'} time_read={time_read} date={date} />
        <img className='post__picture' src={image_url} alt='post' />
        <p className='post__body'>{body}</p>
      </main>
      <section className='comments-section'>
        <h2 className='comments-section__title'>Comentários:</h2>
        <div className='comments'>
          <CommentList post_id={id} />
        </div>
        <SmoothLink to='/'>
          <button className='back'>Back</button>
        </SmoothLink>
      </section>
    </div>
  )
}

export default Post