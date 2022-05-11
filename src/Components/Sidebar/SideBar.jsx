import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { AiOutlineSearch, AiFillSetting } from 'react-icons/ai';
import { MdBorderColor, MdLocalPhone, MdOutlineQuestionAnswer } from 'react-icons/md'
import SidebarThread from '../SidebarThread/SidebarThread';
import { Avatar, IconButton } from '@material-ui/core';
import { auth, db } from '../../Firebase/Firebase';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
const SideBar = () => {
    const user = useSelector(selectUser);
    const [threads, setThreads] = useState([])
    useEffect(() => {
        db.collection("threads").onSnapshot((snapshot) => {
            setThreads((snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            })))
        })
    }, [])
    const addThread = () => {
        const threadName = prompt("Enter Your Name");
        db.collection("threads").add({
            threadName,
        })
    }
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <div className="sidebar-search">
                    <AiOutlineSearch className='search-icon' />
                    <input type="text" className='search-input' placeholder='Search' />
                </div>
                {/* <IconButton> */}
                <MdBorderColor onClick={addThread} className='search-pen__icon' />
                {/* </IconButton> */}
            </div>
            <div className="sidebar-thread">
                {threads.map(({ id, data: { threadName } })=>(
                <SidebarThread userPhoto={user.photoUrl}  key={id} id={id} threadName={threadName} />))
               }
            </div>
            <div className="sidebar-bottom">
                <Avatar src={user.photoUrl} onClick={() => auth.signOut()} className='sidebar-bottom__avatar' />
                <IconButton>
                    <MdLocalPhone />
                </IconButton>
                <IconButton>
                    <MdOutlineQuestionAnswer />
                </IconButton>
                <IconButton>
                    <AiFillSetting />
                </IconButton>
            </div>
        </div>
    )
}

export default SideBar