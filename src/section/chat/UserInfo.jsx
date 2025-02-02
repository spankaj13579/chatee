import { Chat, Clock, DotsThreeVertical, VideoCamera, X } from "@phosphor-icons/react";
import React from "react";

function UserInfo({handleToggleUserInfo}) {
  return (
    <div className="border-l flex flex-col h-full border-stroke dark:border-strokedark">
      <div className="sticky border-b border-stroke dark:border-strokedark flex flex-row justify-between w-full px-6 py-7.5">
      <div className="text-black dark:text-white font-semibold text-lg">Profile</div>
      <button onClick={handleToggleUserInfo}>
        <X size={24}/>
        </button>
      </div>
      <div className="mx-auto my-8">
        <img src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-44 h-44 rounded-lg object-cover object-center"/>
      </div>
      <div className="px-6 space-y-1 ">
        <div className="text-black dark:text-white text-xl font-medium">John doe</div>
        <span className="text-body text-md ">Software Manager</span>
      </div>
      <div className="px-6 my-6">
        <div className="flex flex-row items-center space-x-2">
          <Clock size={20}/>
          <div className="">6:09 AM Local time</div>
        </div>
      </div>
      <div className="px-6 flex flex-row space-x-2 ">
        <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row item-center justify-center hover:opacity-80">
          <Chat size={20} className="mr-3"/>
          Message
        </button>
        <button className="w-full border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row item-center justify-center hover:opacity-80">
          <VideoCamera size={20} className="mr-3"/>
          VideoCall
        </button>
        <button className="border border-stroke dark:border-strokedark p-2 rounded-md flex flex-row item-center justify-center hover:opacity-80">
          <DotsThreeVertical size={20}/>
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
