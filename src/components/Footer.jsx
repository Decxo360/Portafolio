import React from 'react'

export const Footer = () => {
  return (
    <div className='pt-[20px] h-[600px] bg-[url(https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734347/bgFooter_lcp7qz.svg)] flex flex-row justify-around items-center'>
      <div >
         <h1 className='text-[30px] text-white cursor-default'>Linkografia</h1>
         <ul>
            <li className='hover:text-yellow-600 text-white '> <a href="https://app.haikei.app/"> Haikei</a> </li>
            <li className='hover:text-yellow-600 text-white '> <a href="https://tailwindcss.com/"> Tailwind</a> </li>
            
         </ul>
      </div>
      <div>
        <h1 className='text-[30px] text-white cursor-default'>Iconos</h1>
        <ul>
          <li className='hover:text-yellow-600 text-white '><a href="https://www.cleanpng.com/">Pngs</a></li>
          <li className='hover:text-yellow-600 text-white '><a href="https://iconmonstr.com/">Iconos</a></li>
          <li className='hover:text-yellow-600 text-white '> <a href="https://www.flaticon.es/sticker-gratis/videollamada_4105448?related_id=4105448">Persona con pc</a> </li>
        </ul>

      </div>
      
    </div>
  )
}
