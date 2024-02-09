import React from 'react'
import './chatbody.css'
import ChatList from '../chatList/ChatList'
import ChatContent from '../chatContent/ChatContent'
import UserProfil from '../userProfil/UserProfil'
function ChatBody() {
  return (
    <div className="main__chatbody">
        <ChatList/>
        <ChatContent/>
        <UserProfil/>
    </div>
  )
}

export default ChatBody