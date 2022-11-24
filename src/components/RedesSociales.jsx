import React, { useState } from 'react'
import { useEffect } from 'react'

import { Cv, Github, Linkedin, Gmail } from './svg/index'


import { TooltipComponent } from './TooltipComponent'

const urls = [{ url: 'diegolundstest99@gmail.com' }, { url: 'https://github.com/Decxo360' }, { url: 'https://www.linkedin.com/in/diegolundstedt/' }]

export const RedesSociales = () => {
  const [invisible, setInvisible] = useState('invisible')
  const [msg, setMsg] = useState("Copiar")
  const pressClick = () => {
    navigator.clipboard.writeText(urls[0].url)
    setMsg(() => '¡Copiado!')
  }
  const visible = () => {
    console.log(invisible);
    invisible == 'invisible' ? setInvisible('visible') : setInvisible('invisible')
  }



  return (
    <div className='fixed bottom-[20px] right-[20px] '>
      <div className=' flex flex-col-reverse invisible rounded-full shadow-2xl shadow-zinc-600 hover:cursor-pointer hover:shadow-blue-700 '>
        <div>
          <TooltipComponent> 
            <div className={`${invisible} flex justify-center items-center rounded-full w-[80px] h-[80px]  mb-10  shadow-2xl shadow-zinc-600 hover:cursor-pointer hover:shadow-blue-700`} onClick={pressClick}>
            <Gmail />
          </div >
            <span className='tooltipText'> Mi correo </span>
          </TooltipComponent>
        </div>
        <div>
          <TooltipComponent>
            <a className={`${invisible} flex justify-center items-center rounded-full w-[80px] h-[80px]  mb-10 shadow-2xl shadow-zinc-600 hover:shadow-blue-700`} href={urls[1].url}>
              <Github />
            </a>
            <span className='tooltipText'> Mi Github</span>
          </TooltipComponent>
        </div>
        <div>
          <TooltipComponent>
            <a className={`${invisible} flex justify-center items-center rounded-full w-[80px] h-[80px]  mb-10 shadow-2xl shadow-zinc-600 hover:shadow-blue-700`} href={urls[2].url}>
              <Linkedin />
            </a>
            <span className='tooltipText'> Mi Linkedin </span>
          </TooltipComponent>
        </div>
        <div>
          <TooltipComponent>
          <a download={'DiegoLundstedtCv'} className={`${invisible} flex justify-center items-center  mb-10  rounded-full w-[80px] h-[80px] shadow-2xl shadow-zinc-600 hover:shadow-blue-700`} href={'https://drive.google.com/file/d/12H-RbyrqxAc3ep42y7P-t6F6SjMWfX7t/view?usp=share_link'}>
            <Cv></Cv>
          </a>
          <span className='tooltipText'>Mi cv</span>
          </TooltipComponent>
        </div>
        <div>
          <TooltipComponent>
            <div className={`${invisible} rotate-180 flex justify-center items-center rounded-full w-[80px] h-[80px]  mb-10 shadow-2xl shadow-zinc-600 hover:shadow-blue-700`}>
              <img className='animate-bounce ' width={43} src="https://cdn-icons-png.flaticon.com/512/608/608258.png" alt=" flecha" />
            </div>
            <span className='tooltipText'>Subir</span>
          </TooltipComponent>
          
        </div>
      </div>
      <div>
        <TooltipComponent>
          <div className='flex justify-center items-center rounded-full w-[80px] h-[80px] shadow-2xl shadow-zinc-600 hover:cursor-pointer hover:shadow-blue-700 ' onClick={visible}>
            <img width={43} src="https://cdn.icon-icons.com/icons2/1464/PNG/512/cell_100187.png" alt=" cruz" />
          </div >
          <span className='tooltipText'> Opciones</span>
        </TooltipComponent>
      </div>
     
    </div>
  )
}
