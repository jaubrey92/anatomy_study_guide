import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RegionCard from '../components/RegionCard'
import { Link } from 'react-router-dom'
import Client from '../services/api'

const RegionDetails = () => {
  let { regionId } = useParams()

  const [muscles, setMuscles] = useState([])
  const [title, setTitle] = useState('')

  const getTheseFlashcards = async () => {
    let response = await Client.get(`/regions/${regionId}`)
    console.log(response)
    setMuscles(response.data.muscles)
    setTitle(response.data.content)
  }

  useEffect(() => {
    getTheseFlashcards()
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {muscles.map((muscle) => (
          <Link to={`/view/regions/${muscle._id}`}>
            <RegionCard
              id={muscle._id}
              title={muscle.title}
              // origin={card.origin}
              // insertion={card.insertion}
              // innervation={card.innervation}
              // action={card.action}
              image={muscle.image}
              // comments={card.comments.content}
              // onClick={onClick}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RegionDetails
