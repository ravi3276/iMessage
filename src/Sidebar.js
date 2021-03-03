import React from 'react'
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">

        <div className="sidebar__header">
        <Avatar className="sidebar__avatar" src="" alt=""/>
        <div className="sidebar__search">
        <SearchIcon />
        <input placeholder="Search" type="text"/>
        </div>

        <IconButton>
        <RateReviewIcon />
        </IconButton>

        </div>

        <div className="sidebar__body">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        </div>
            
        </div>
    )
}

export default Sidebar
