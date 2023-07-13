import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'

const RegionMuscleDetails = (props) => {
  let { muscleId } = useParams()

  const [muscleDetails, setMuscleDetails] = useState({})

  useEffect(() => {
    const getCard = async () => {
      let response = await Client.get(`/cards/${muscleId}`)
      setMuscleDetails(response.data)
    }

    getCard()
  }, [muscleId])

  return (
    <div>
      <section>
        <div>
          <h1>{muscleDetails.title}</h1>
          <img src={muscleDetails.image} alt="Muscle Image" />
        </div>
      </section>
      <section>
        <div>
          <h3>Origin: {muscleDetails.origin}</h3>
          <h3>Insertion: {muscleDetails.insertion}</h3>
          <h3>Innervation: {muscleDetails.innervation}</h3>
          <h3>Action: {muscleDetails.action}</h3>
        </div>
      </section>
    </div>
  )
}

export default RegionMuscleDetails
