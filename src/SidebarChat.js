import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./SidebarChat.css"
function SidebarChat() {
    return (
        <div className="sidebarchat">
        <Avatar src="" alt="" />
        <div className="sidebar__bodyinfo">
            <h3>channel name</h3>
            <p>display message...</p>
            <small>sent time</small>

        </div>
        </div>
    )
}

export default SidebarChat
