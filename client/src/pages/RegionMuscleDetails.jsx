import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'

const RegionMuscleDetails = (props) => {
  console.log(props.title)
  // let { muscleId } = useParams()

  // const [muscleDetails, setMuscleDetails] = useState({})

  // useEffect(() => {
  //   const getCard = async () => {
  //     console.log(muscleId)
  //     let response = await Client.get(`/cards/${muscleId}`)
  //     console.log(response)
  //     setMuscleDetails(response.data)
  //   }

  //   getCard()
  // }, [muscleId])

  return (
    <div>
      <section>
        <div>
          <h1>{props.title}</h1>
          <img src={props.image} alt="Muscle Image" />
        </div>
      </section>
      <section>
        <div>
          <h3>Origin: {props.origin}</h3>
          <h3>Insertion: {props.insertion}</h3>
          <h3>Innervation: {props.innervation}</h3>
          <h3>Action: {props.action}</h3>
        </div>
      </section>
    </div>
  )
}

export default RegionMuscleDetails
