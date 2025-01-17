import { ChatTeardropText } from '@phosphor-icons/react'
import React from 'react'

function Logo() {
  return (
    <div className='flex flex-row text-center space-x-2'>
        <ChatTeardropText size={32} weight='bold'/>
        <div className='text-2xl font-medium text-body dark:text-white'>chati</div>
    </div>
  )
}

export default Logo