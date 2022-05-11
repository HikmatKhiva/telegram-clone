import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setThread } from '../../features/threadSlice';
import { db } from '../../Firebase/Firebase';
import './sidebarThread.css';

const SidebarThread = ({ id, threadName, userPhoto }) => {
  const dispatch = useDispatch()
  const [threadInfo, setThreadInfo] = useState([])
  useEffect(() => {
    db.collection("threads").doc(id)
      .collection('message')
      .orderBy("timestamp", "desc").onSnapshot(snapshot => (
        setThreadInfo(snapshot.docs.map(doc => doc.data()))
      ))
  }, [id])
  console.log(threadInfo);
  return (
    <div onClick={() => dispatch(setThread({
      threadId: id,
      threadName: threadName
    }))}
      className='sidebarThread'>
      <Avatar src={userPhoto} />
      <div className="sidebarThread-details">
        <h3>{threadName}</h3>
        <p>{threadInfo[0]?.message}</p>
        {/* <small className='sidebarThread-timestamp'>{new Date(threadInfo[0].timestamp?.toDate()).toLocaleString()}</small> */}
      </div>
    </div>
  )
}

export default SidebarThread