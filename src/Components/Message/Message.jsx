import { Avatar } from '@material-ui/core'
import React from 'react'
import './message.css'
const Message = ({
  id,data:{
    timestamp,
    message,
    photoUrl,
    uid,
    email,
    displayName
  }
}) => {
  return (
    <div className='message'>
      <Avatar src={photoUrl} className='message-photo' />
      <div className="message-content">
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    </div>
  )
}

export default Message