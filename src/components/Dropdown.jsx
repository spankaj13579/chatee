import { DotsThree, PencilSimple, TrashSimple } from '@phosphor-icons/react'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function Dropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const trigger = useRef(null);
    const dropdown = useRef(null);

    useEffect(()=>{
        function clickHandler({target}){
            if(!dropdown.current) return;
            if(!dropdown || dropdown.current.contains(target) || trigger.current.contains(target)) {
                return;
            }
            setDropdownOpen(false);
        }
        document.addEventListener('click', clickHandler);
        // remove handler for performance 
        return ()=> document.removeEventListener('click', clickHandler);
    });

// key handler
useEffect(()=>{
    function keyHandler({keyCode}){
        if(!dropdownOpen || keyCode !== 27) return;
        setDropdownOpen(false);
    }
    document.addEventListener('keydown', keyHandler);
        // remove handler for performance 
    return ()=> document.removeEventListener('keydown', keyHandler);
})

  return (
    <div className='relative flex '>
        <button ref={trigger} className='text-[#98a6ab] hover:text-body ' onClick={()=>{
            setDropdownOpen((prev) => !prev)
        }}>
            <DotsThree size={24} weight='bold'/>
        </button>
        <div className={`absolute right-0 top-full z-50 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen== true ? 'block' : 'hidden'}`} ref={dropdown} onFocus={()=> setDropdownOpen(true)} onBlur={()=> setDropdownOpen(false)}>
            <button className='flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4'>
                <PencilSimple size={20} />
                Edit
            </button>
            <button className='flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4'>
                <TrashSimple size={20} />
                Delete
            </button>
        </div>
    </div>
  )
}

export default Dropdown