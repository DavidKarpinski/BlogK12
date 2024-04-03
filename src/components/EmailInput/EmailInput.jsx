import { useState } from 'react'
import { isEmail } from 'validator'

function EmailInput({name = 'email'}) {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleEmailChange = e => {
    const newEmail = e.target.value
    setEmail(newEmail)

    if (!isEmail(newEmail))
      setEmailError('Por favor, insira um endereço de email válido.')
    else setEmailError('')
  }

  return (
    <div>
      <input
        type='email'
        name={name}
        placeholder={'Email...'}
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p className="error" style={{ color: 'red', marginBottom: '20px' }}>{emailError}</p>}
    </div>
  )
}

export default EmailInput