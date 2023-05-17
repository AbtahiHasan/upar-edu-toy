import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { HiHome } from "react-icons/hi";
import errorImg from "/error.svg"

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img className='h-[50vh]' src={errorImg} alt="" />
        <div className='max-w-md text-center'>
        <p className='text-2xl font-semibold md:text-3xl text-[#00abe4] mb-8'>
            {error?.message}
          </p>
          <Link className=" text-white w-[200px] p-2 text-[21px]   mt-[10px]" to='/' >
          <button className='bg-[#00abe4] mx-auto p-2 px-5 flex items-center rounded-full gap-3'> <HiHome/> <span>Back to homepage</span></button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage