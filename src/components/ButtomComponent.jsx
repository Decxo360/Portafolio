import React from 'react'

export const ButtomComponent = ({children}) => {
  return (
    <div className='w-[auto] h-7 rounded-xl ease-in-out duration-300 delay-150 hover:scale-125 hover:cursor-pointer bg-slate-700 text-gray-50 flex justify-center mt-1 mb-1 mr-3 ml-3'>
        {children}
    </div>
  )
}
