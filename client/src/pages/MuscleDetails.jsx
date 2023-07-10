import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'

const MuscleDetails = (props) => {
  let { cardId } = useParams()

  const [cardDetails, setCardDetails] = useState({})

  useEffect(() => {
    const getCard = async () => {
      let response = await Client.get(`/cards/${cardId}`)
      console.log(response.data)
      setCardDetails(response.data)
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
        </div>
      </section>
    </div>
  )
}

export default MuscleDetails
