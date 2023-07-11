import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import MuscleIndex from './pages/MuscleIndex'
import MuscleDetails from './pages/MuscleDetails'
import RegionIndex from './pages/RegionIndex'
import ArmsAndAbdominals from './pages/regions/ArmsAndAbdominals'
import HeadAndNeck from './pages/regions/HeadAndNeck'
import HipAndThigh from './pages/regions/HipAndThigh'
import ShankAndFoot from './pages/regions/ShankAndFoot'
import ShoulderGirdle from './pages/regions/ShoulderGirdle'
import AddMuscle from './pages/AddMuscle'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddMuscle />} />
          <Route path="/view/cards" element={<MuscleIndex />} />
          <Route path="/cards/details/:cardId" element={<MuscleDetails />} />
          <Route path="/view/region" element={<RegionIndex />} />
          <Route path="/view/region/1" element={<ArmsAndAbdominals />} />
          <Route path="/view/region/2" element={<HeadAndNeck />} />
          <Route path="/view/region/3" element={<HipAndThigh />} />
          <Route path="/view/region/4" element={<ShankAndFoot />} />
          <Route path="/view/region/5" element={<ShoulderGirdle />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
