import React from 'react'

export const TooltipComponent = ({children}) => {
  return (
    <div className='tooltip flex flex-col justify-center items-center xs'>
        {children}
    </div>
  )
}
