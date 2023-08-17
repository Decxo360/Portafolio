import React from 'react'
import { ButtomComponent } from './ButtomComponent'

export const CardComponent = ({ titulo, etiquetas, descripcion, url, codigo, web }) => {
    return (
        <div className='flex flex-col w-[500px] mt-8   ml-10 mr-10 bg-slate-800 rounded-md hover:shadow-lg hover:shadow-blue-500/50 animate__animated animate__slideInLeft hover:cursor-pointer'>
            <div className='mb-4 flex justify-center items-center bg-slate-300 rounded-md'>
                <img src={url} alt="web" className='w-[400px] mt-3 mb-3' />
            </div>
            <div >
                <h1 className='flex justify-center items-center text-[40px] text-white '>{titulo}</h1>
                <div className='grid grid-cols-1 justify-around ml-4 mr-10 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3'>
                    {etiquetas.map((etiqueta, index) => (
                        <ButtomComponent key={index}>{etiqueta}</ButtomComponent>
                    ))}
                </div>
                <div className='ml-10 mr-10 mb-20 mt-5 flex flex-col justify-center items-center text-white text-justify'>
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className='absolute bottom-5 text-white h-[50px] w-[100%]' >
                <div className='flex justify-around mt-5'>
                    <button className=' bg-indigo-800 rounded-md h-[35px] w-[100px] hover:scale-125 ease-in-out duration-100 delay-150 hover:bg-indigo-500 '><a href={codigo} target='_blank'>Ver código</a></button>
                    {web !== undefined ?
                        <button className=' bg-indigo-800 rounded-md h-[35px] w-[100px] hover:scale-125 ease-in-out duration-100 delay-150 hover:bg-indigo-500'><a href={web} target='_blank'>Ver web</a></button>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}
