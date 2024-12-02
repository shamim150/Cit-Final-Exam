import React from 'react'

const PageDesign = ({children,className}  ) => {
  return (
    <div className={`w-full h-full rounded-[30px] p-5 ${className}`}>
        {children}        
    </div>
  )
}

export default PageDesign