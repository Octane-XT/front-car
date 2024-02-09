import React from 'react'
import './chatbody.css'
import ChatList from '../chatList/ChatList'
import ChatContent from '../chatContent/ChatContent'
//import UserProfil from '../userProfil/UserProfil'
function ChatBody() {
  return (
    <div className="main__chatbody" style={{width:'1280px', margin:'auto'}}>
        <ChatList/>
        <ChatContent/>

    </div>
  )
}
export default ChatBody