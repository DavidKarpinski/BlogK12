import { Link } from 'react-router-dom'
import EmailInput from '../../components/EmailInput/EmailInput'
import Captcha from '../../components/Captcha/Captcha'

function Register() {
  return (
    <div id='register'>
      <h1 className='form-h1'>Registre-se</h1>
      <h2 className='form-h2'>Já tem uma conta? <Link to='/login'>Faça login</Link></h2>
      <form id='register-form'>
        <div>
          <label htmlFor='name'>Nome:</label>
          <input type='text' name='name' placeholder='Nome...' />
          <label htmlFor='email'>Email:</label>
          <EmailInput />
          <label htmlFor='password'>Senha:</label>
          <input type='password' name='password' placeholder='Senha...' />
          <Captcha />
          <input type='submit' id='submit' value='Registrar' />
        </div>
      </form>
    </div>
  )
}

export default Register
