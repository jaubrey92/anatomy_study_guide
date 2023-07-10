import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import MuscleIndex from './pages/MuscleIndex'
import MuscleDetails from './pages/MuscleDetails'
import RegionIndex from './pages/RegionIndex'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/view/cards" element={<MuscleIndex />} />
          <Route path="/view/cards/:regionId" element={<RegionIndex />} />
          <Route path="/cards/details/:cardId" element={<MuscleDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
