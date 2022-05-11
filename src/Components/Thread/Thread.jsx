import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './thread.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdTimer, MdSend } from 'react-icons/md';
import { BiMicrophone } from 'react-icons/bi';
import Message from '../Message/Message';
import { db } from '../../Firebase/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectThreadId, selectThreadName } from '../../features/threadSlice';
import "firebase/compat/firestore"
import firebase from "firebase/compat/app";
import { selectUser } from '../../features/userSlice';

const Thread = () => {
    const [input, setInput] = useState("");
    const [message, setMessage] = useState([]);
    const threadName = useSelector(selectThreadName);
    const threadId = useSelector(selectThreadId);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    useEffect(() => {
        if (threadId) {
            db.collection("threads")
                .doc(threadId)
                .collection('message')
                .orderBy("timestamp", "desc").onSnapshot(snapshot => {
                    setMessage(snapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            data: doc.data()
                        }
                    }))
                })
        }
    }, [threadId])
    const sendMessage = (e) => {
        e.preventDefault()
        db.collection("threads").doc(threadId).collection("message").add({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            message: input,
            photoUrl: user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }
    return (
        <div className='thread'>
            <div className="thread-header">
                <div className="thread-headerContainer">
                    <div className="thread-headerDetails">
                        {threadId ? <Avatar src={user.photoUrl} /> : <Avatar />}
                        {/* <Avatar src={user.photoUrl} /> */}
                    </div>
                    <div className="thread-headerDetails__info">
                        <h4>{threadId ? threadName : "Click on any ChatName"}</h4>
                        <h5>just now</h5>
                    </div>
                </div>
                <IconButton>
                    <FiMoreHorizontal className='thread-headerMore__Horizontal' />
                </IconButton>
            </div>
            <div className="threadMessage">
                {message.map(({ id, data }) => {
                    return <Message
                        key={id}
                        id={id}
                        data={data}
                    />
                })}
            </div>
            <div className="thread-input">
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter a Message ...' />
                    <IconButton>
                        <MdTimer />
                    </IconButton>
                    <IconButton onClick={sendMessage} type="submit">
                        <MdSend />
                    </IconButton>
                    <IconButton>
                        <BiMicrophone />
                    </IconButton>
                </form>
            </div>
        </div>
    )
}

export default Thread