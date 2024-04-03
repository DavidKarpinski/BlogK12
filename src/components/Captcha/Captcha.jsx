import ReCAPTCHA from 'react-google-recaptcha'

function Captcha() {
  const captchaKey = process.env.REACT_APP_CAPTCHA_KEY
  return (
    <ReCAPTCHA sitekey={captchaKey} onChange={() => {}} />
  )
}

export default Captcha