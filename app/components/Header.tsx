import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div className="sticky">
        
        <div className="contenedor-header flex w-full h-[85px] justify-between">

              <div className="header-1 w-full h-auto bg-black">

              </div>

              <div className="header-2 w-full h-auto bg-[#FFD32A]">

              </div>

              <div className="header-3 w-full h-auto bg-black" style={ { clipPath: 'polygon(0 100%, 100% 0, 0 0)' }}>

              </div>

               <div className="header-4 w-full h-auto bg-[#FFD32A]" style={ { clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}>

              </div>

        </div>

    </div>
  )
}

export default Header