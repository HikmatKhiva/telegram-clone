import { Avatar } from '@material-ui/core';
import React from 'react';
import './sidebarThread.css';

const SidebarThread = ({ id, threadName }) => {
  return (
    <div className='sidebarThread'>
      <Avatar />
      <div className="sidebarThread-details">
        <h3>{threadName}</h3>
        <p>message</p>
        <small className='sidebarThread-timestamp'>timestamp</small>
      </div>
    </div>
  )
}

export default SidebarThread