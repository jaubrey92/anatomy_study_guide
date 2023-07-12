const Flashcard = (props) => {
  return (
    <div key={props.id}>
      <div>
        <img src={props.image} alt="Muscle Image" />
      </div>
      <div>
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}

export default Flashcard
