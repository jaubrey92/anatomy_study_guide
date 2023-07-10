import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/view/cards">All Muscles</Link>
        <Link to="/view/cards/:regionId">Body Regions</Link>
      </nav>
    </header>
  )
}

export default Header
