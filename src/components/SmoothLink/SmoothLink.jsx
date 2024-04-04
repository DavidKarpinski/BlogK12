import { Link } from 'react-router-dom'

function SmoothLink({ to, children }) {
  return (
    <Link to={to} onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })}>{children}</Link>
  )
}

export default SmoothLink