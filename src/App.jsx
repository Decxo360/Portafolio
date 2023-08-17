import { useRef, useState } from 'react'
import { AboutMe } from './components/AboutMe'
import { CardComponent } from './components/CardComponent'
import { Competencias } from './components/Competencias'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { Parallax } from './components/Parallax'
import { RedesSociales } from './components/RedesSociales'
import {proyectos} from "./constants/constante"



function App() {

  const aboutMe = useRef(null)
  const competencias = useRef(null)
  const proyecto = useRef(null)
  const redesSosciales = useRef(null)
  const inicio = useRef(null)



  return (
    <div >
      <div className='m-0 p-0 bg-slate-900 flex flex-col'>
        <NavBar inicio={inicio} aboutMe={aboutMe} competencias={competencias} proyecto={proyecto} redesSociales={redesSosciales} />
      </div>
      <Parallax />
      <div className='h-[150px] overflow-hidden mt-[-150px] '>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-[100%] w-[100%]'>
          <path d="M-1.97,94.25 C75.90,-142.58 382.34,217.61 501.41,-0.47 L500.00,150.00 L0.00,150.00 Z"
            className='stroke-none fill-slate-900'></path>
        </svg>
      </div>
      <div className='bg-slate-900 ' ref={aboutMe}>
        <AboutMe />
      </div>
      <div className='h-[150px] overflow-hidden bg-white'>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-[100%] w-[100%]'>
          <path d="M-1.41,142.42 C132.89,-53.94 380.64,265.78 503.10,84.20 L519.47,-20.39 L-3.10,-3.61 Z"
            className='stroke-none fill-slate-900'></path>
        </svg>
      </div>
      <div ref={competencias} className='bg-white'>
        <h1 className='text-[30px] text-center'>Competencias:</h1>
        <Competencias />
      </div>
      <div className='h-[150px] overflow-hidden bg-white'>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-[100%] w-[100%]'>
          <path d="M-1.97,94.25 C75.90,-142.58 382.34,217.61 501.41,-0.47 L500.00,150.00 L0.00,150.00 Z"
            className='stroke-none fill-slate-900'></path>
        </svg>
      </div>
      <h1 className='text-center text-[30px] text-white bg-slate-900'>Proyectos</h1>
      <div className='bg-slate-900 flex flex-wrap justify-center pb-[150px]' ref={proyecto}>

        {proyectos.map(({ id, titulo, etiquetas, descripcion, url, codigo,web }, index) => (
          <CardComponent key={id} titulo={titulo} codigo={codigo} etiquetas={etiquetas} descripcion={descripcion} url={url} web={web} />
        ))}
      </div>

      <div className='w-[100%]'>
        <RedesSociales inicio={inicio} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
