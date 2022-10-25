import React from 'react'

export const NavBar = ({aboutMe,competencias,proyecto,redesSociales}) => {

  const scrollTo = (elementRef)=> {
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  return (
    <div className='pt-5 flex justify-center items-center w-full  ' >
        <div className='flex flex-row items-start'>
            <p className='ml-4 text-white text-[15px] transition ease-in-out duration-700 hover:scale-125 cursor-pointer' onClick={()=> scrollTo(aboutMe)}>Sobre mí</p>
            <p className='ml-4 text-white text-[15px] transition ease-in-out duration-700 hover:scale-125 cursor-pointer' onClick={()=>  scrollTo(competencias)}>Competencias</p>
            <p className='ml-4 text-white text-[15px] transition ease-in-out duration-700 hover:scale-125 cursor-pointer' onClick={()=>  scrollTo(proyecto)}>Proyectos</p>
            <p className='ml-4 text-white text-[15px] transition ease-in-out duration-700 hover:scale-125 cursor-pointer' onClick={()=>  scrollTo(redesSociales)}>Redes Sociales</p>
        </div>
    </div>
  )
}
