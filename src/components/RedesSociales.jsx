import React from 'react'
import { Github } from './svg/Github'
import { Gmail } from './svg/Gmail'
import { Linkedin } from './svg/Linkedin'
import { TooltipComponent } from './TooltipComponent'

const urls = [{url:'diegolundstest99@gmail.com'},{url:'https://github.com/Decxo360'},{url:'https://www.linkedin.com/in/diego-lundstedt-5a583a22a/'}]

export const RedesSociales = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='mt-5 text-[30px] text-zinc-200'> ¿Dónde me encuentras? </h1>
        <div className='flex flex-row justify-around items-center mt-7 w-[100%]'>
          <div onClick={navigator.clipboard.writeText(urls[0].url)}>
            <TooltipComponent>
              <Gmail/>
              <span className='tooltipText'>Mi correo</span>
            </TooltipComponent>
          </div>
           <a href={urls[1].url}>
            <TooltipComponent>
              <Github/>
              <span className='tooltipText'>Mi github</span>
            </TooltipComponent>
           </a>
          <a href={urls[2].url}>
            <TooltipComponent>
              <Linkedin/>
              <span className='tooltipText'>Mi Linkedin</span>
            </TooltipComponent>
            
          </a>
        </div>
    </div>
  )
}
