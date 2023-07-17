import Client from '../services/api'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Comment = (props) => {
  let navigate = useNavigate()

  const deleteComment = async () => {
    console.log(props.card_id)
    await Client.delete(`/comments/${props.id}`)
    navigate('/view/cards')
  }

  return (
    <div>
      <ul>
        <li>
          {props.comment}{' '}
          <button type="submit" onClick={() => deleteComment()}>
            Delete
          </button>{' '}
        </li>
      </ul>
    </div>
  )
}

export default Comment
