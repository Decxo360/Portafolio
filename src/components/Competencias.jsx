import React from 'react'
import { CardRoundedComponent } from './CardRoundedComponent'

const competencias=[
    {id:0,entorno:'React',url:'https://es.reactjs.org/docs/getting-started.html',icono:'../../../public/react.png'},
    {id:1,entorno:'Vue',url:'https://vuejs.org/',icono:'../../../public/vue.png'},
    {id:2,entorno:'SQL',url:'https://www.mysql.com/',icono:'../../../public/Mysql.png'},
    {id:3,entorno:'PHP',url:'https://www.php.net/',icono:'../../../public/php.png'},
    {id:4,entorno:'Java',url:'https://www.java.com/es/',icono:'../../../public/java.png'},
    {id:5,entorno:'Javascript',url:'https://www.javascript.com/',icono:'../../../public/js.png'},
    {id:6,entorno:'Node',url:'https://nodejs.org/en/docs/',icono:'../../../public/node.png'},
    {id:7,entorno:'Proximamente (Python)',url:'',icono:'../../../public/pyhton.png'}
]

export const Competencias = () => {
  return (
    <div className='flex justify-center items-start flex-wrap ' >
        {competencias.map((competencia)=>(
           <CardRoundedComponent key={competencia.id} url={competencia.icono} texto={competencia.entorno} documentacion={competencia.url}></CardRoundedComponent>
        ))}
    </div>
  )
}
