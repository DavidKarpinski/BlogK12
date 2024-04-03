import './Comment.css'

function Comment({ username = 'devJovem', email = 'devjovem@example.com', message = 'Muito interessante! Estou começando minha jornada na programação e este post me inspirou bastante.'}) {
  return (
    <li className='comment'>
      <div className='comment__img-container'>
        <img className='comment__img' src='https://via.placeholder.com/128x128' alt='placeholder' />
      </div>
      <div className="comment__data">
        <p><strong>Usuário:</strong> {username} | {email}</p>
        <p><strong>Mensagem:</strong> {message}</p>
      </div>
    </li>
  )
}

export default Comment