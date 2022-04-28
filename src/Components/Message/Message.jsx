import { Avatar } from '@material-ui/core'
import React from 'react'
import './message.css'
const Message = () => {
  return (
    <div className='message'>
      <Avatar className='message-photo' />
      <div className="message-content">
        <p>This is test</p>
        <small>timestamp</small>
      </div>
    </div>
  )
}

export default Message