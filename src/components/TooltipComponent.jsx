import React from 'react'

export const TooltipComponent = ({children}) => {
  return (
    <div className='tooltip flex flex-row-reverse justify-center items-center '>
        {children}
    </div>
  )
}
