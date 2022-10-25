import React from 'react'

export const CardRoundedComponent = ({url, texto, documentacion}) => {

  const handleClick=()=>{
    
  }

  return (
    <div onClick={handleClick()} className='h-[200px] w-[200px] ml-5 mr-5 mt-14 bg-slate-200 text-end rounded-full hover:cursor-pointer hover:shadow-lg shadow-blue-500/50'>
        <div className='flex justify-center flex-col items-center mt-6' >
            <img src={url} alt={texto} className='pt-2 h-[100px] w-[100px] ' />
            <p className='text-center'>{texto}</p>
        </div>
    </div>
  )
}
