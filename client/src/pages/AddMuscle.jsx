import { useState } from 'react'
import { GetCards } from '../services/CardServices'

const AddMuscle = () => {
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

  const handleSubmit = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="issueType">Muscle Name:</label>
      <select
        id="issueType"
        onChange={handleChange}
        value={formState.issueType}
        // defaultValue="select"
      >
        <option selected="selected" value="select" disabled>
          Select Service Type
        </option>
        <option value="outage">Service Outage</option>
        <option value="billing">Billing</option>
        <option value="cancel">Cancel Service</option>
      </select>
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        onChange={handleChange}
        value={formState.subject}
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.message}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default AddMuscle
