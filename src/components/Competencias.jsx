import React from 'react'
import { CardRoundedComponent } from './CardRoundedComponent'

const competencias=[
    {id:0,entorno:'React',url:'https://es.reactjs.org/docs/getting-started.html',icono:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734355/react_eypjcq.png'},
    {id:1,entorno:'Vue',url:'https://vuejs.org/',icono:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734357/vue_z6mqkn.png'},
    {id:2,entorno:'SQL',url:'https://www.mysql.com/',icono:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734352/mysql_pgoz3n.png'},
    {id:3,entorno:'PHP',url:'https://www.php.net/',icono:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734353/php_uag8z5.png'},
    {id:4,entorno:'Java',url:'https://www.java.com/es/',icono:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734348/java_oiu8i5.png'},
    {id:5,entorno:'Javascript',url:'https://www.javascript.com/',icono:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734352/js_ovzjgp.png'},
    {id:6,entorno:'Node',url:'https://nodejs.org/en/docs/',icono:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734348/node_zsm507.png'},
    {id:7,entorno:'Proximamente (Python)',url:'',icono:'https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734356/pyhton_wdmadx.png'}
]

export const Competencias = () => {
  return (
    <div className='flex justify-center items-start flex-wrap bg-white animate__animated animate__zoomIn' >
        {competencias.map((competencia)=>(
           <CardRoundedComponent key={competencia.id} url={competencia.icono} texto={competencia.entorno} documentacion={competencia.url}></CardRoundedComponent>
        ))}
    </div>
  )
}
