import React,{useState,useEffect} from 'react'
import './Sidebar.css';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import SidebarChat from './SidebarChat';
import {useSelector} from "react-redux"

import {selectUser} from './features/userSlice'
import db,{ auth } from './firebase';
function Sidebar() {
    const user=useSelector(selectUser)
    const[chat,setChat]=useState([]);

    useEffect(() => {
            db.collection("chats").onSnapshot(snapshot => (
                setChat(snapshot.docs.map(doc=>(
                    {
                        id:doc.id,
                        data:doc.data()
                    }
                )))

            ))
    },[])

    const addChat=() => {
        const name=prompt('please enter your name')
            db.collection("chats").add({
                chatName:name
            })
    }

    return (
        <div className="sidebar">

        <div className="sidebar__header">
        <Avatar 
        onClick={()=>{auth.signOut()}}
        className="sidebar__avatar" src={user.photo} alt=""/>
        <div className="sidebar__search">
        <SearchIcon />
        <input placeholder="Search" type="text"/>
        </div>

        <IconButton>
        <RateReviewIcon onClick={addChat}/>
        </IconButton>

        </div>

        <div className="sidebar__body">

        {
            chat.map(({id,data:{chatName}})=>(
                <SidebarChat key={id} id={id} chatName={chatName}/>
            ))
        }

        </div>
            
        </div>
    )
}

export default Sidebar
