import './Footer.css'

function Footer() {
  const footerText = '&copy; 2024 XGROW K-12, Todos os direitos reservados'
  return (
    <footer className='footer'>
      <p className='footer__text'>{footerText}</p>
    </footer>
  )
}

export default Footer