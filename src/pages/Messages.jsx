
import React from 'react'
import { MessageInbox, Sidebar } from '../section/chat'
import Chatlist from '../section/chat/Chatlist'

export const Messages = () => {
  return (
    <div className="h-screen overflow-hidden">
        <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">
{/* sidebar */}
    <Sidebar />

{/* chatlist */}
    <Chatlist />

{/* inbox */}
    <MessageInbox />

        </div>
    </div>  
  )
}
