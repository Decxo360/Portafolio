import React, { useState } from 'react'
import { useRef } from 'react'

import { Cv, Github, Linkedin, Gmail } from './svg/index'
import { TooltipComponent } from './TooltipComponent'

import {gsap} from 'gsap'
import { useEffect } from 'react'

const urls = [{ url: 'diegolundstest99@gmail.com' }, { url: 'https://github.com/Decxo360' }, { url: 'https://www.linkedin.com/in/diegolundstedt/' }]

export const RedesSociales = ({inicio}) => {
  const [invisible, setInvisible] = useState('invisible')
  const [msg, setMsg] = useState("Mi correo")
  const [animacion,setAnimacion] = useState(false)

  const linkedin = useRef(null)
  const cv = useRef(null)
  const gmail = useRef(null)
  const github = useRef(null)
  const toStart = useRef(null)
  
  console.log(invisible)

  const tl = gsap

  const pressClick = () => {
    navigator.clipboard.writeText(urls[0].url)
    setMsg(() => '¡Copiado!')
  }
  const visible = () => {
     if(invisible == 'invisible' ){
      setInvisible('visible') 
      setAnimacion(true)
     }else{
      setTimeout(()=>{
         setInvisible('invisible')
      },1500)   
      setAnimacion(false)
     }
  }

  const ToStart = (ref) =>{
    window.scrollTo({
      top:ref.current.offsetTop,
      behavior:'smooth'
    })
  }
  
  useEffect(() => {
    
    if (animacion === false) {
      tl.fromTo(toStart.current,{y:0},{y:600,duration:1,delay:1})
      tl.fromTo(cv.current,{y:0},{y:480,duration:1,delay:1})
      tl.fromTo(linkedin.current,{y:0},{y:360,duration:1,delay:1})
      tl.fromTo(github.current,{y:0},{y:240,duration:1,delay:1})
      tl.fromTo(gmail.current,{y:0},{y:120,duration:1,delay:1})
      console.log('ejecuto este');
    }else{
      tl.fromTo(toStart.current,{y:600,duration:1,delay:1},{y:0 })
      tl.fromTo(cv.current,{y:480,duration:1,delay:1},{y:0})
      tl.fromTo(linkedin.current,{y:360,duration:1,delay:1},{y:0})
      tl.fromTo(github.current,{y:240,duration:1,delay:1},{y:0})
      tl.fromTo(gmail.current,{y:120,duration:1,delay:1},{y:0})
      console.log('ejecuto este otro')
    }
   
  }, [animacion])
  
  
  


  return (
    <div className='fixed bottom-[20px] right-[20px] '>
      <div className=' flex flex-col-reverse invisible rounded-full shadow-2xl shadow-zinc-600 hover:cursor-pointer hover:shadow-blue-700 '>
        <div ref={gmail}>
          <TooltipComponent> 
            <div className={`${invisible} flex bg-cyan-900 justify-center items-center rounded-full w-[80px] h-[80px]  mb-10  hover:cursor-pointer`} onClick={pressClick}>
            <Gmail />
          </div >
            <span className='tooltipText'>{msg}</span>
          </TooltipComponent>
        </div>
        <div ref={github}>
          <TooltipComponent>
            <a className={`${invisible} flex bg-cyan-900 justify-center items-center rounded-full w-[80px] h-[80px]  mb-10  `} href={urls[1].url}>
              <Github />
            </a>
            <span className='tooltipText'> Mi Github</span>
          </TooltipComponent>
        </div>
        <div ref={linkedin}>
          <TooltipComponent>
            <a className={`${invisible} flex bg-cyan-900 justify-center items-center rounded-full w-[80px] h-[80px]  mb-10 `} href={urls[2].url}>
              <Linkedin />
            </a>
            <span className='tooltipText'> Mi Linkedin </span>
          </TooltipComponent>
        </div>
        <div ref={cv}>
          <TooltipComponent>
          <a download={'DiegoLundstedtCv'} className={`${invisible} flex bg-cyan-900 justify-center items-center  mb-10  rounded-full w-[80px] h-[80px] `} href={'https://drive.google.com/file/d/12H-RbyrqxAc3ep42y7P-t6F6SjMWfX7t/view?usp=share_link'}>
            <Cv></Cv>
          </a>
          <span className='tooltipText'>Mi cv</span>
          </TooltipComponent>
        </div>
        <div ref={toStart}>
          <TooltipComponent>
            <div className={`${invisible} rotate-180 flex bg-cyan-900 justify-center items-center rounded-full w-[80px] h-[80px]  mb-10 -2xl hover:-blu`} onClick={()=>ToStart(inicio)}>
              <img className='animate-bounce ' width={43} src="https://cdn-icons-png.flaticon.com/512/608/608258.png" alt=" flecha" />
            </div>
            <span className='tooltipText'>Subir</span>
          </TooltipComponent>
          
        </div>
      </div>
      <div aria-disabled={animacion}>
        <TooltipComponent>
          <div className='flex bg-cyan-900 justify-center items-center rounded-full w-[80px] h-[80px] -2xl hover:cursor-pointer hover:shadow-blue-700 ' onClick={visible}>
            <img width={43} src="https://cdn.icon-icons.com/icons2/1464/PNG/512/cell_100187.png" alt=" cruz" />
          </div >
          <span className='tooltipText'> Opciones</span>
        </TooltipComponent>
      </div>
     
    </div>
  )
}
