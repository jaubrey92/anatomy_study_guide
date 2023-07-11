import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="navStyle">
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |{' '}
        <Link to="/add">Add a Muscle</Link> |
        <Link to="/view/cards">All Muscles</Link> |
        <Link to="/view/region">Body Regions</Link>
      </nav>
    </header>
  )
}

export default Header
