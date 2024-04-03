import { Link } from 'react-router-dom'
import { fetchPost } from '../../scripts/fetchPost'
import './PostCard.css'
import TimeInfo from '../TimeInfo/TimeInfo'

function PostCard({ post_id }) {
  const { title, body, time_read, created_at:date } = fetchPost(post_id)
  const target = `/posts/${post_id}`

  return (
    <div className='card'>
      <Link to={target}>
        <div className='card__img-container'>
          <img className='card__img' src='https://via.placeholder.com/241x236' alt='placeholder' />
        </div>
      </Link>
      <div>
        <h2 className='card__title'><Link to={target}>{title}</Link></h2>
        <p className='cutted card__body'><Link to={target}>{body}</Link></p>
        <TimeInfo _class={'card__timeinfo'} time_read={time_read} date={date} />
      </div>
    </div>
  )
}

export default PostCard