import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Parallax = () => {


  return (
    <div className='w-[100%] h-[100vh] mt-[-80px]'>
        <img className='opacity-50  fixed z-[-1] w-[100%] h-[100vh]' src="https://i0.wp.com/academy.leewayweb.com/wp-content/uploads/2018/07/cursos-y-consejos-para-aprender-a-programar-desde-cero-gratis-y-online.jpg?w=996&ssl=1" alt="programming" />
        <div className='flex flex-col justify-center items-center w-[100%] h-[100vh] '>
            <h1 className='text-black text-[50px] text-center'>Analista Programador</h1>
            <span className='text-[20px]'>Diego Ignacio Lundstedt Muñoz</span>
        </div>
    </div>
  )
}
