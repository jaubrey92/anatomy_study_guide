import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import MuscleIndex from './pages/MuscleIndex'
import RegionIndex from './pages/RegionIndex'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards/details/:cardId" element={<MuscleIndex />} />
          <Route path="/view/cards/:regionId" element={<RegionIndex />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
