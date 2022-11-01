import React from 'react'

const nombre = 'Diego Ignacio Lundstedt Muñoz'
const descripcion = `!Hola!, Me Llamo Diego Ignacio Lundstedt Muñoz y tengo 22 años. En la actualidad me dedico a ser desarrollador, tanto como Front-end como Back-end, cuento con un título técnico como Analista Programador desde hace ya un año. Soy una persona con muchos sueños y me esfuerzo constantemente por cumplirlos. Uno sería vivir complemamente del desarrollo y del mundo IT. Me gusta investigar constantemente respecto a tecnologías nuevas y lenguajes que no conozco, soy bastante curioso, perfeccionista, proactivo, motivado, perseverante, autodidacta, entre otras más. Actualmente cuento con algunos proyectos en base a mis conocimientos adquiridos de cursos y la curiosidad propia. Los cuales serán mostrados en la sección de proyectos. En la siguiente sección muestro mis competencias prácticas.`;

export const AboutMe = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 2xl:flex-row xl:flex-row lg:flex-row md:flex-row'>
        <div className='ml-5 mr-10 mb-5 mt-5 '>
            <img className='rounded-full border-solid border-cyan-800 border-2 mx-auto' src="https://res.cloudinary.com/drp7cwb8s/image/upload/v1666734356/videollamada_evur9z.png" alt="persona" />
            <p className='text-center text-[25px] text-yellow-50'>{nombre}</p>
        </div>
        <div className='w-[50%]'>
            <p className='text-white text-justify mr-5 '>{descripcion}</p>
        </div>
    </div>
  )
}
