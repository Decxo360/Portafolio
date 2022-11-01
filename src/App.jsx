import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import { AboutMe } from './components/AboutMe'
import { CardComponent } from './components/CardComponent'
import { Competencias } from './components/Competencias'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { RedesSociales } from './components/RedesSociales'


const proyectos = [
  {id:1,titulo:'JournalApp', codigo:'https://github.com/Decxo360/JournalApp', etiquetas:['yarn','vite','react','react-redux','redux-toolkit','firebase','social Login','fetch','Javascript','Auth','Material UI','Swet Alert 2','react rooter dom'],descripcion:'Esta es una aplicacion de notas donde puedes guardar tu nota actual, subir imagenes de lo que haz hecho, eliminar notas, crear, actualizar. Cuenta con login local y social login de google.',url:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734353/proyecto1_pngnuf.png'},
  {id:2,titulo:'Buscador de Gifs', codigo:'https://github.com/Decxo360/react-gif-expertApp', etiquetas:['npm','react','fetch'], descripcion:'Proyecto donde consumo una api rest de Giphy, la cual consiste en buscar el gif relacionado con lo escrito por el usuario',url:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734358/proyecto2_pqpkeo.png'},
  {id:3,titulo:'Ricks And Mortys',codigo:'https://github.com/Decxo360/RicksAndMorty-s',etiquetas:['yarn','vite','react-redux','react','RTQuerys','bootstrap','react router dom'],descripcion:'Una web que permite buscar y ver las descripciones de los personajes de ricks and mortys la serie. Esto implementando una tecnologia la cual proviene de las RTQuerys',url:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734352/proyecto_3_h0l7go.png'},
  {id:4,titulo:'Indecisions',codigo:'sin codigo',etiquetas:['yarn','vue','fetch'],descripcion:'Una web la cual consumo una api res, la cual retorna un gif el cual responde si o no a la pregunta ingresada por el usuario',url:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734363/proyecto4_jaqatu.png'},
  {id:5,titulo:'Backend node js',codigo:'https://github.com/Decxo360/blog-app-mysql-nodejs',etiquetas:['yarn','node','express','mysql','passport','jwt','brcyrpts','dotenv','nodemon','CRUD','express-session'],descripcion:'Este es un backend hecho com mysqq, workbench, xampp. Es un backend hecho para una pagina web futura la cual constara de creacion de publicaciones, perfil, entre otras cosas. Por curiosidad implemente este backend tanto en java+springboot y tambien en laravel+php',url:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734356/proyecto5_yrpj1b.png'}
]

function App() {

  const aboutMe = useRef(null)
  const competencias = useRef(null)
  const proyecto = useRef(null)
  const redesSosciales = useRef(null)

  return (
    <div>
      <div className='m-0 p-0 bg-slate-900 flex flex-col' ref={aboutMe}>
        <NavBar aboutMe={aboutMe} competencias={competencias} proyecto={proyecto} redesSociales={redesSosciales}  />
        <AboutMe/>
      </div>
      <div className='h-[150px] overflow-hidden'>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-[100%] w-[100%]'>
            <path d="M-1.41,142.42 C132.89,-53.94 380.64,265.78 503.10,84.20 L519.47,-20.39 L-3.10,-3.61 Z" 
            className='stroke-none fill-slate-900'></path>
          </svg>
      </div>
      <div ref={competencias}>
        <Competencias/>
      </div>
      <div className='h-[150px] overflow-hidden'>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='h-[100%] w-[100%]'>
            <path d="M-1.97,94.25 C75.90,-142.58 382.34,217.61 501.41,-0.47 L500.00,150.00 L0.00,150.00 Z" 
            className='stroke-none fill-slate-900'></path>
          </svg>
      </div>
      <div className='bg-slate-900 flex flex-wrap justify-center' ref={proyecto}>
        {proyectos.map(({id,titulo,etiquetas,descripcion,url,codigo},index)=>(
          <CardComponent key={id} titulo={titulo} codigo={codigo} etiquetas={etiquetas} descripcion={descripcion} url={url}/>
        ))}
      </div>
      <div className='bg-slate-900 h-[auto]' ref={redesSosciales}>
        <RedesSociales/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
