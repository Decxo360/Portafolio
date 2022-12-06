import {gsap} from 'gsap'
export const NavBar = ({inicio,aboutMe,competencias,proyecto}) => {

  const scrollTo = (elementRef)=> {
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  return (
    <div className='h-[60px] flex justify-center items-center w-full  ' ref={inicio}>
        <div className='flex flex-row justify-center items-center'>
            <p className='ml-4 text-white text-[20px] transition ease-in-out duration-700 hover:scale-125 cursor-pointer' onClick={()=> scrollTo(aboutMe)}>Sobre mí</p>
            <p className='ml-4 text-white text-[20px] transition ease-in-out duration-700 hover:scale-125 cursor-pointer' onClick={()=>  scrollTo(competencias)}>Competencias</p>
            <p className='ml-4 text-white text-[20px] transition ease-in-out duration-700 hover:scale-125 cursor-pointer' onClick={()=>  scrollTo(proyecto)}>Proyectos</p>
        </div>
    </div>
  )
}
