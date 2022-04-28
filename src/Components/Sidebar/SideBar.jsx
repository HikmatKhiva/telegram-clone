import React from 'react'
import './sidebar.css'
import { AiOutlineSearch, AiFillSetting } from 'react-icons/ai';
import { MdBorderColor, MdLocalPhone, MdOutlineQuestionAnswer } from 'react-icons/md'
import SidebarThread from '../SidebarThread/SidebarThread';
import { Avatar, IconButton } from '@material-ui/core';
const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <div className="sidebar-search">
                    <AiOutlineSearch className='search-icon' />
                    <input type="text" className='search-input' placeholder='Search' />
                </div>
                {/* <IconButton> */}
                <MdBorderColor className='search-pen__icon' />
                {/* </IconButton> */}
            </div>
            <div className="sidebar-thread">
                <SidebarThread />
                <SidebarThread />
                <SidebarThread />
                <SidebarThread />
                <SidebarThread />
            </div>
            <div className="sidebar-bottom">
                <Avatar className='sidebar-bottom__avatar' />
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