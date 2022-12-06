import { TooltipComponent } from './TooltipComponent'
import { Cv, Github, Linkedin, Gmail } from './svg/index'
import { useRedesSociales } from '../Hooks/useRedesSociales'


const urls = [{ url: 'diegolundstest99@gmail.com' }, { url: 'https://github.com/Decxo360' }, { url: 'https://www.linkedin.com/in/diegolundstedt/' }]

export const RedesSociales = ({inicio}) => {
  
  const {  invisible, msg, animacion, pressClick, visible, ToStart, linkedin, cv, gmail, github, toStart} = useRedesSociales()

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
            <img color='dark' className='rotate-45' width={43} src="https://img.icons8.com/ios-glyphs/512/delete-sign.png" alt="TresPuntos" />
          </div >
          <span className='tooltipText'> Opciones</span>
        </TooltipComponent>
      </div>
     
    </div>
  )
}
