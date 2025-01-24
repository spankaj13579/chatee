import { Chat, DotsThreeCircle, SignOut, User, UserCircle } from '@phosphor-icons/react'
import React from 'react'
import DarkModeSwitcher from '../../components/DarkModeSwitcher'

const NAVIGATION = [
  {
    Key: 0,
    title: 'DMs',
    icon: <Chat size={24}/>
  },
  {
    Key: 1,
    title: 'Groups',
    icon: <User size={24}/>
  },
  {
    Key: 2,
    title: 'Profile',
    icon: <UserCircle size={24}/>
  },
  {
    Key: 3,
    title: 'More',
    icon: <DotsThreeCircle size={24}/>
  }
];

function Sidebar() {
  return (
    <div className="flex flex-col border-r border-stroke  p-2 dark:border-strokedark ">
        <div className='mx-auto border rounded-md border-stroke p-2 dark:border-strokedark'>
            <Chat size={24}/>
        </div>
        <div className="flex flex-col grow"></div>
        <div className="space-y-4.5">
        <DarkModeSwitcher/>
            <div className='mx-auto border rounded-md border-stroke p-2 dark:border-strokedark hover:bg-stone-100 hover:cursor-pointer'>
                <SignOut size={24}/>
            </div> 
        </div>
    </div>
  )
}

export default Sidebar