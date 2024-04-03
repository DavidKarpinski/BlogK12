import axios from 'axios'
import { useEffect, useState } from 'react'
import Comment from '../Comment/Comment'
import { dateFmt } from '../../scripts/dateFmt'

function CommentList({ post_id }) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/comments?post_id=${post_id}`)
    .then(function (response) {
      const { data } = response
      console.log(data)
      setData(data)
    })
    .catch(function (error) {
      console.error(error)
    })
  }, [post_id])

  return (
    <ul>
      {data.map(comment => {
        const { id:key, username, email, comment:message, created_at:date } = comment
        return (
          <Comment key={key} username={username} email={email} date={dateFmt(date)} message={message} />
        )
      })}
    </ul>
  )
}

export default CommentList