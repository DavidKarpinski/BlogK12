import './Comment.css'

function Comment({ username, email, message, date }) {
  return (
    <li className='comment'>
      <div className='comment__img-container'>
        <img className='comment__img' src='https://via.placeholder.com/128x128' alt='placeholder' />
      </div>
      <div className="comment__data">
        <p><strong>Usuário:</strong> {username} | {email} <span style={{color: '#ccc'}}>{date}</span></p>
        <p><strong>Mensagem:</strong> {message}</p>
      </div>
    </li>
  )
}

export default Comment