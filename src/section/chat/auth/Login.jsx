import React from 'react'
import Logo from '../../../components/Logo'
import { Link } from 'react-router-dom'
import loginIllustration from '../../../images/auth/chat-login.svg'

function Login() {
  return (
    <div className='border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen'>
        <div className="flex flex-wrap items-center h-full">
            <div className="hidden w-full xl:block xl:w-1/2">
                <div className="py-17.5 px-26 text-center">
                   <Link className='mb-5.5 inline-block '>
                    <Logo />
                   </Link>
                    <p className='2xl:px-20 '>
                      Hey🫰, Welcome back. Login to your Secure chatbox
                    </p>
                    <span className='mt-15 inline-block'>
                      <img src={loginIllustration} alt="Login" className='h-115 w-auto object-cover object-center'/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login