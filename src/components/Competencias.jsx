import React from 'react'
import { CardRoundedComponent } from './CardRoundedComponent'
import { competencias } from '../constants/constante'

export const Competencias = () => {
  return (
    <div className='flex justify-center items-start flex-wrap bg-white animate__animated animate__zoomIn' >
        {competencias.map((competencia)=>(
           <CardRoundedComponent key={competencia.id} url={competencia.icono} texto={competencia.entorno} documentacion={competencia.url}></CardRoundedComponent>
        ))}
    </div>
  )
}
