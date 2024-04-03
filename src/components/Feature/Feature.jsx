import { Link } from 'react-router-dom'
import { fetchPost } from '../../scripts/fetchPost'
import TimeInfo from '../TimeInfo'
import './Feature.css'

function Feature({ post_id }) {
  const { title, body, time_read, created_at:date } = fetchPost(post_id)
  const postLink = `/posts/${post_id}`
  const featImgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkiuyQLyl2IS77Qo1KGa5m-kcS-Lg30hxt6xU4vGK&s'

  return (
      <header className='feature'>
        <Link to={postLink}>
          <h1 className='feature__title'>{title}</h1>
        </Link>
        <p className='feature__fine-line'>Aqui você ficará bem informado com nosso blog super top</p>
        <Link to={postLink}>
          <div className='feature__img-container'>
            <img className='feature__img' src={featImgUrl} alt='featured' />
          </div>
        </Link>
        <Link to={postLink}>
          <p className='prev cutted'>
            {body}
          </p>
        </Link>
        <TimeInfo _class={'feature__time_info'} time_read={time_read} date={date} />
      </header>
  )
}

export default Feature