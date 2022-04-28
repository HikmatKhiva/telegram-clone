import { Avatar, IconButton } from '@material-ui/core';
import React,{useState} from 'react';
import './thread.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdTimer, MdSend } from 'react-icons/md';
import { BiMicrophone } from 'react-icons/bi';
import Message from '../Message/Message';
const Thread = () => {
    const [input,setInput] = useState("")
    return (
        <div className='thread'>
            <div className="thread-header">
                <div className="thread-headerContainer">
                    <div className="thread-headerDetails">
                        <Avatar />
                    </div>
                    <div className="thread-headerDetails__info">
                        <h4>Thread Name</h4>
                        <h5>Just now</h5>
                    </div>
                </div>
                <IconButton>
                    <FiMoreHorizontal className='thread-headerMore__Horizontal' />
                </IconButton>
            </div>
            <div className="threadMessage">
                <Message />
            </div>
            <div className="thread-input">
                <form>
                    <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter a Message ...' />
                    <IconButton>
                        <MdTimer />
                    </IconButton>
                    <IconButton>
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