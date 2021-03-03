import React from 'react';
import Chat from './Chat';
import './Imessage.css';
import Sidebar from './Sidebar';
function Imessage() {
    return (
        <div className="imessage">
            {/* sidebar*/}
            <Sidebar />
            {/* chat*/}
            <Chat />
            </div>
    )
}

export default Imessage
