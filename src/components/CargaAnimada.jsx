import React from 'react'




export const CargaAnimada = () => {
  return (
    <div className={`absolute top-[60%] left-[50%] w-[142px] h-[40px] m-[-20px 0 0 -71px] contrast-[20] z-[-1]`}>
        <span className='absolute w-[16px] h-[16px] top-[12px] left-[15px] blur-sm bg-[#000] rounded-[50%] translate-x-[0]' style={{animation:'punto 2.8s infinite'}}></span>
        <div className='translate-x-[0] mt-[12px] ml-[31px]' style={{animation:'puntos 2.8s infinite'}}>
            <span className='block float-left w-[16px] h-[16px] ml-[16px] blur-sm bg-[#000] rounded-[50%]'></span>
            <span className='block float-left w-[16px] h-[16px] ml-[16px] blur-sm bg-[#000] rounded-[50%]' ></span>
            <span className='block float-left w-[16px] h-[16px] ml-[16px] blur-sm bg-[#000] rounded-[50%]'></span>
        </div>
    </div>
  )
}
