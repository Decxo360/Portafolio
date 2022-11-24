import React from 'react'
import { RedesSociales } from './RedesSociales'

export const Footer = () => {
  return (
    <div className='pt-[20px] h-[auto] bg-zinc-800  flex flex-col justify-around items-center pb-[20px]'>
    
      <br />
      <div className='flex flex-row justify-around w-[100%]'>
        <div className='w-[25%] text-justify'>
          <h1 className='text-center text-[20px] text-white '>Portafolio</h1>
          <hr className='mb-5'/>
          <span className='text-white '>Este Portafolio esta creado directamente con react.js, aplicando de cierta manera lo aprendido en diversas investigaciones y curiosidades respecto al area de la programacion. 
            <br/> 
            <br/> 
              Este portafolio se puede ver en mi github el cual estan las incorporaciones de las funcionalidades, que he utilizado, en este caso los hooks de react. He utilizado Tailwindcss para las características visuales y de diseño. Aún en proceso de mejora.
            </span>
        </div>

        <div >
          <h1 className='text-[20px] text-white cursor-default'>Linkografia</h1>
          <br />
          <ul>
            <li className='hover:text-yellow-600 text-white '> <a href="https://app.haikei.app/"> Haikei</a> </li>
            <li className='hover:text-yellow-600 text-white '> <a href="https://tailwindcss.com/"> Tailwind</a> </li>
          </ul>
        </div>
        <div>
          <h1 className='text-[20px] text-white cursor-default'>Iconos</h1>
          <br />
          <ul>
            <li className='hover:text-yellow-600 text-white '><a href="https://www.cleanpng.com/">Pngs</a></li>
            <li className='hover:text-yellow-600 text-white '><a href="https://iconmonstr.com/">Iconos</a></li>
            <li className='hover:text-yellow-600 text-white '> <a href="https://www.flaticon.es/sticker-gratis/videollamada_4105448?related_id=4105448">Persona con pc</a> </li>
          </ul>
        </div>
        
      </div>
      
      <h1>® Para que se vea fachero</h1>
    </div>
  )
}
