const RegionCard = (props) => {
  return (
    // <div key={props.id}>
    //   <div>
    //     <img src={props.image} alt="Muscle Image" />
    //   </div>
    //   <div>
    //     <h3>{props.title}</h3>
    //   </div>
    // </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={props.image}
            alt="MuscleImage"
            className="regionCardImage"
            // style={{width:300px;height:300px;}}
          />
          <h1>{props.title}</h1>
        </div>
        <div className="flip-card-back">
          <h3>O: {props.origin}</h3>
          <h3>I: {props.insertion}</h3>
          <h3>N: {props.innervation}</h3>
          <h3>A: {props.action}</h3>
        </div>
      </div>
    </div>
  )
}

export default RegionCard
