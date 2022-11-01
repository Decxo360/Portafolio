import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { Github } from './svg/Github'
import { Gmail } from './svg/Gmail'
import { Linkedin } from './svg/Linkedin'
import { TooltipComponent } from './TooltipComponent'

const urls = [{url:'diegolundstest99@gmail.com'},{url:'https://github.com/Decxo360'},{url:'https://www.linkedin.com/in/diegolundstedt/'}]

export const RedesSociales = () => {
  const [msg, setMsg] = useState("Copiar")
  const pressClick =()=>{
    navigator.clipboard.writeText(urls[0].url)
      setMsg(()=>'¡Copiado!')
  }
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='mt-5 text-[30px] text-zinc-200'> ¿Dónde me encuentras? </h1>
        <div className='flex flex-col justify-around items-center mt-7 w-[100%] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row'>
          <div className='mt-3 mb-10 flex flex-col rounded-xl justify-center items-center w-[150px] h-[150px] shadow-2xl shadow-zinc-600 hover:cursor-pointer hover:shadow-blue-700 ' onClick={pressClick}>
            <TooltipComponent>
              <Gmail/>
              <span className='tooltipText'>{msg}</span>
            </TooltipComponent>
            <span className='text-slate-200'>Mi correo</span>
          </div >
           <a className=' mt-3 mb-10 flex flex-col rounded-2xl justify-center items-center w-[150px] h-[150px] shadow-2xl shadow-zinc-600 hover:shadow-blue-700' href={urls[1].url}>
            <TooltipComponent>
              <Github/>
              <span className='tooltipText'>Ir</span>
            </TooltipComponent>
            <span className='text-slate-200'>Mi Github</span>
           </a>
          <a className='mt-3 mb-10 flex flex-col rounded-2xl justify-center items-center w-[150px] h-[150px] shadow-2xl shadow-zinc-600 hover:shadow-blue-700' href={urls[2].url}>
            <TooltipComponent>
              <Linkedin/>
              <span className='tooltipText'>Ir</span>
            </TooltipComponent>
            <span className='text-slate-200'>Mi Linkedin</span>
          </a>
          <a download={'DiegoLundstedtCv'} className='mt-3 mb-10 flex flex-col rounded-2xl justify-center items-center w-[150px] h-[150px] shadow-2xl shadow-zinc-600 hover:shadow-blue-700' href={'https://drive.google.com/file/d/12H-RbyrqxAc3ep42y7P-t6F6SjMWfX7t/view?usp=share_link'}>
            <TooltipComponent>
              <img className='w-[50px]' src="https://cdn-icons-png.flaticon.com/512/942/942833.png" alt="cv" />
              <span className='tooltipText'>Ver CV</span>
            </TooltipComponent>
            <span className='text-slate-200'>Mi CV</span>
          </a>
        </div>
    </div>
  )
}
