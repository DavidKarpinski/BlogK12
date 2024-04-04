/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useEffect, useState } from 'react'

export function fetchPost(post_id) {
  const [postData, setPostData] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${post_id}`)
    .then(res => {
      setPostData(res.data)})
    .catch(e => console.error(e))
  }, [post_id])

  postData.image_url && (postData.image_url = postData.image_url
  .replace('unsplash.com/photos/', 'source.unsplash.com/'))

  return postData
}