import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import Comment from '../components/Comment'

const MuscleDetails = (props) => {
  let { cardId } = useParams()

  const [cardDetails, setCardDetails] = useState({})
  const [comments, setComments] = useState([])

  useEffect(() => {
    const getCard = async () => {
      let response = await Client.get(`/cards/${cardId}`)
      console.log(response.data)
      setCardDetails(response.data)
      setComments(response.data.comments)
    }

    getCard()
  }, [cardId])

  return (
    <div>
      <section>
        <div>
          <h1>{cardDetails.title}</h1>
          <img src={cardDetails.image} alt="Muscle Image" />
        </div>
      </section>
      <section>
        <div>
          <h3>Origin: {cardDetails.origin}</h3>
          <h3>Insertion: {cardDetails.insertion}</h3>
          <h3>Innervation: {cardDetails.innervation}</h3>
          <h3>Action: {cardDetails.action}</h3>
          <div>
            <h3>User Comments: </h3>
            {comments.map((comment) => (
              <Comment comment={comment.content} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MuscleDetails
