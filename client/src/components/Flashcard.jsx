const Flashcard = (props) => {
  return (
    <div key={props.id}>
      <div>
        <img src={props.image} alt="Muscle Image" />
      </div>
      <div>
        <h3>{props.title}</h3>
        {/* <p>{props.origin}</p>
        <p>{props.insertion}</p>
        <p>{props.innervation}</p>
        <p>{props.action}</p> */}
        {/* <p>{props.comments}</p> */}
      </div>
    </div>
  )
}

export default Flashcard
