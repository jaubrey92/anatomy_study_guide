import { Link } from 'react-router-dom'

const RegionIndex = () => {
  return (
    <div>
      <h1>Body Regions</h1>
      <div className="regionPage">
        <div className="regionSelect">
          <Link to="/view/region/1">
            <div className="headAndNeck"></div>
          </Link>
          <Link to="/view/region/2">
            <div className="shoulderGirdle"></div>
          </Link>
          <Link to="/view/region/3">
            <div className="armsAndAbdominals"></div>
          </Link>
          <Link to="/view/region/4">
            <div className="hipAndThigh"></div>
          </Link>
          <Link to="/view/region/5">
            <div className="shankAndFoot"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegionIndex
