import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddMuscle = () => {
  let navigate = useNavigate()
  const initialState = {
    title: '',
    origin: '',
    insertion: '',
    innervation: '',
    action: '',
    image: ''
  }

  const [formState, setFormState] = useState(initialState)

  const [card, setCard] = useState({})

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:3001/cards', formState)
    setFormState(initialState)
    navigate('/view/cards')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Muscle Name:</label>
      <input
        type="text"
        id="title"
        onChange={handleChange}
        value={formState.title}
      ></input>
      <label htmlFor="origin">Origin:</label>
      <input
        type="text"
        id="origin"
        onChange={handleChange}
        value={formState.origin}
      />
      <label htmlFor="insertion">Insertion:</label>
      <input
        type="text"
        id="insertion"
        onChange={handleChange}
        value={formState.insertion}
      />
      <label htmlFor="innervation">Innervation:</label>
      <input
        type="text"
        id="innervation"
        onChange={handleChange}
        value={formState.innervation}
      />
      <label htmlFor="action">Action:</label>
      <input
        type="text"
        id="action"
        onChange={handleChange}
        value={formState.action}
      />
      <label htmlFor="image">Image URL:</label>
      <textarea
        id="image"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.image}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddMuscle
