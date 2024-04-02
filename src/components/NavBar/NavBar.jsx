import './NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav-content'>
        <p className='navbar__title'>Blog K-12</p>
        <div className='navbar__buttons'>
          <a href='/'><button id='posts'>Posts</button></a>
          <a href='/login'><button id='login'>Login</button></a>
          <a href='/register'><button id='register'>Registre-se</button></a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
