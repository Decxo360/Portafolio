import React from 'react'
import { CargaAnimada } from './CargaAnimada';
import {nombre,descripcion} from "../constants/constante"

export const AboutMe = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-10 2xl:flex-row xl:flex-row lg:flex-row md:flex-row animate__animated  animate__backInUp'>
        <div className='ml-5 mr-10 mb-5 mt-5 '>
            <img className='rounded-full border-solid border-cyan-800 border-2 mx-auto' src="https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734356/videollamada_evur9z.png" alt="persona" />
        </div>
        <div className='w-[50%]'>
            <p className='text-white text-justify mr-5 '>{descripcion}</p>
        </div>
    </div>
  )
}
