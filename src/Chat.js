import React,{useState,useEffect} from 'react'
import './Chat.css'
import IconButton from '@material-ui/core/IconButton';
import MicNoneIcon from '@material-ui/icons/MicNone';
function Chat() {
        const [input,setInput]=useState('');
    const sendMessage=(e)=>{
        console.log("object");
        e.preventDefault();
    }
    console.log(input);

    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To: 
                <span className="chat__name">
                ChannelName
                </span>
                </h4>
                <strong>Details</strong>
            </div>

            <div className="chat__body">
            <h1>messages</h1>
            <h1>messages</h1>
            <h1>messages</h1>
            <h1>messages</h1>
            </div>

            <div className="chat__footer">
            <form className="chat__form">
            <input
            value={input}
            onChange={e=>setInput(e.target.value)}
            type="text" placeholder="i Message"/>
            <button onClick={sendMessage}>send</button>
            </form>
            <IconButton>
            <MicNoneIcon />
            </IconButton>
            </div>
        </div>
    )
}

export default Chat
