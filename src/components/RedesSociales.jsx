import React, { useState } from 'react'
import { Github } from './svg/Github'
import { Gmail } from './svg/Gmail'
import { Linkedin } from './svg/Linkedin'
import { TooltipComponent } from './TooltipComponent'

const urls = [{url:'diegolundstest99@gmail.com'},{url:'https://github.com/Decxo360'},{url:'https://www.linkedin.com/in/diegolundstedt/'}]

export const RedesSociales = () => {
  const [msg, setMsg] = useState("Copiar")

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='mt-5 text-[30px] text-zinc-200'> ¿Dónde me encuentras? </h1>
        <div className='flex flex-col justify-around items-center mt-7 w-[100%] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row'>
          <div className='mt-3 mb-5 flex flex-col rounded-2xl justify-center items-center w-[150px] h-[150px] shadow-2xl shadow-zinc-600 hover:cursor-pointer hover:shadow-blue-700' onClick={navigator.clipboard.writeText(urls[0].url)}>
            <TooltipComponent>
              <Gmail/>
              <span className='tooltipText'>{msg}</span>
            </TooltipComponent>
            <span className='text-slate-200'>Mi correo</span>
          </div >
           <a className=' mt-3 mb-5 flex flex-col rounded-2xl justify-center items-center w-[150px] h-[150px] shadow-2xl shadow-zinc-600 hover:shadow-blue-700' href={urls[1].url}>
            <TooltipComponent>
              <Github/>
              <span className='tooltipText'>Ir</span>
            </TooltipComponent>
            <span className='text-slate-200'>Mi Github</span>
           </a>
          <a className='mt-3 mb-5 flex flex-col rounded-2xl justify-center items-center w-[150px] h-[150px] shadow-2xl shadow-zinc-600 hover:shadow-blue-700' href={urls[2].url}>
            <TooltipComponent>
              <Linkedin/>
              <span className='tooltipText'>Ir</span>
              
            </TooltipComponent>
            <span className='text-slate-200'>Mi Linkedin</span>
          </a>
        </div>
    </div>
  )
}
