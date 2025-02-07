import React from 'react'

function Gifmodal() {
    const modalOpen = true;
  return (
    <div className={`fixed left-0 top-0 -z-999999 flex h-full  min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${modalOpen ? 'block' : 'hidden'}`}>
        <div className="md:px-17.5 w-full w-max-142.5 rounded-lg  bg-white dark:bg-boxdark md:py-8 px-8 py-12">
            
        </div>
    </div>
  )
}

export default Gifmodal