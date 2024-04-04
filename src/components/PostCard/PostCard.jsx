import SmoothLink from '../SmoothLink'
import TimeInfo from '../TimeInfo'
import { fetchPost } from '../../scripts/fetchPost'
import './PostCard.css'

function PostCard({ post_id }) {
  const { title, body, time_read, created_at:date, image_url } = fetchPost(post_id)
  const target = `/posts/${post_id}`

  return (
    <div className='card'>
      <SmoothLink to={target}>
        <div className='card__img-container'>
          <img className='card__img' src={image_url} alt='placeholder' />
        </div>
      </SmoothLink>
      <div>
        <h2 className='card__title'><SmoothLink to={target}>{title}</SmoothLink></h2>
        <p className='cutted card__body'><SmoothLink to={target}>{body}</SmoothLink></p>
        <TimeInfo _class={'card__timeinfo'} time_read={time_read} date={date} />
      </div>
    </div>
  )
}

export default PostCard