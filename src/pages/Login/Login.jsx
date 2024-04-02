import { Link } from 'react-router-dom'
import EmailInput from '../../components/EmailInput/EmailInput'
import Captcha from '../../components/Captcha/Captcha'

function Login() {
  return (
    <div id='login'>
      <h1 className='form-h1'>Login</h1>
      <h2 className='form-h2'>Novo no site? <Link to='/register'>Registre-se</Link></h2>
      <form id='login-form'>
        <div>
          <label htmlFor='email'>Email:</label>
          <EmailInput />
          <label htmlFor='password'>Senha:</label>
          <input type='password' name='password' placeholder='Senha...'></input>
          <Captcha />
          <input type='submit' id='submit' value='Login'></input>
        </div>
      </form>
    </div>
  )
}

export default Login