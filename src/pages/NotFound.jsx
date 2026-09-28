import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="page notfound">
      <span className="kicker">SIGNAL LOST</span>
      <h1 className="mega-title">404</h1>
      <p className="lead">This coordinate doesn’t exist in our world.</p>
      <Link to="/" className="btn" data-cursor="GO">RETURN HOME</Link>
    </main>
  )
}
