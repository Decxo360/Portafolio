import { useState,useRef,useEffect } from 'react'
import {gsap} from 'gsap'

const urls = [{ url: 'diegolundstest99@gmail.com' }, { url: 'https://github.com/Decxo360' }, { url: 'https://www.linkedin.com/in/diegolundstedt/' }]

export const useRedesSociales = () =>{

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
        setAnimacion(false)
        setTimeout(()=>{
            setInvisible('invisible')
        },1500)   
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
        }else{
            tl.fromTo(toStart.current,{y:600,duration:1,delay:1},{y:0 })
            tl.fromTo(cv.current,{y:480,duration:1,delay:1},{y:0})
            tl.fromTo(linkedin.current,{y:360,duration:1,delay:1},{y:0})
            tl.fromTo(github.current,{y:240,duration:1,delay:1},{y:0})
            tl.fromTo(gmail.current,{y:120,duration:1,delay:1},{y:0})
        }
    }, [animacion])

    return{
        invisible,
        msg,
        animacion,
        pressClick,
        visible,
        ToStart,
        linkedin,
        cv,
        gmail,
        github,
        toStart
    }

}