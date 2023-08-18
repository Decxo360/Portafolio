import {gsap} from 'gsap'

const pStyle='ml-4 text-white text-[20px] transition ease-in-out duration-700 hover:scale-125 cursor-pointer'

export const NavBar = ({inicio,aboutMe,competencias,proyecto,contacto}) => {

  const scrollTo = (elementRef)=> {
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  return (
    <div className='h-[60px] flex justify-center items-center w-full  ' ref={inicio}>
        <div className='flex flex-row justify-center items-center'>
            <p className={pStyle} onClick={()=> scrollTo(aboutMe)}>Sobre mí</p>
            <p className={pStyle} onClick={()=>  scrollTo(competencias)}>Competencias</p>
            <p className={pStyle} onClick={()=>  scrollTo(proyecto)}>Proyectos</p>
            <p className={pStyle} onClick={()=>  scrollTo(contacto)}>Contactame</p>
        </div>
    </div>
  )
}
