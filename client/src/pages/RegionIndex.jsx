import { Link } from 'react-router-dom'

const RegionIndex = () => {
  return (
    <div>
      <h1>Body Regions</h1>
      <div className="regionPage">
        <div className="regionSelect">
          <div className="headAndNeck"></div>
          <div className="shoulderGirdle"></div>
          <div className="armsAndAbdominals"></div>
          <div className="hipAndThigh"></div>
          <div className="shankAndFoot"></div>
        </div>
      </div>
    </div>
  )
}

export default RegionIndex
