import axios from 'axios'
import { dateFmt } from '../../scripts/dateFmt'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Comment from '../../components/Comment/Comment'
import './Post.css'

const url = 'http://localhost:3000'

function Post() {
  const { id } = useParams()
  const [postData, setPostData] = useState({})

  useEffect(() => {
    axios.get(`${url}/posts/${id}`)
    .then(function (response) {
      const { data } = response
      console.log(data)
      setPostData(data)
    })
    .catch(function (error) {
      console.error(error)
      window.location = '/not-found'
    })
  }, [id])

  const { title, body, created_at:date, time_read, image_url } = postData
  console.log(image_url)

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
        <li className='comments'>
          <Comment />
          <Comment />
          <Comment />
        </li>
      </section>
    </div>
  )
}

export default Post