import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Flashcard from '../../components/Flashcard'
import { Link } from 'react-router-dom'
import { GetCards } from '../../services/CardServices'

const MuscleIndex = () => {
  let { cardId } = useParams()

  const [cards, setCards] = useState([])

  const getAllFlashcards = async () => {
    let response = await GetCards()
    console.log(response)
    setCards(response)
  }

  useEffect(() => {
    getAllFlashcards()
  }, [])

  return (
    <div>
      <h1>Shoulder Girdle</h1>
      <div>
        {cards.map((card) => (
          <Link to={`/cards/details/${card._id}`}>
            <Flashcard
              id={card._id}
              title={card.title}
              origin={card.origin}
              insertion={card.insertion}
              innervation={card.innervation}
              action={card.action}
              image={card.image}
              // comments={card.comments.content}
              // onClick={onClick}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MuscleIndex
