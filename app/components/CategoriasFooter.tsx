import { getCategorias } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react'

type Props = {}

async function CategoriasFooter({}: Props) {

  const categoriaFetch = await getCategorias();


        
  return (
    <div className="bg-[#385AE0]">

        {categoriaFetch.map((miseccion) => (

        <div key={miseccion._id} className="w-full h-full">

            <div className="contenedor-categoriasfooter lg:p-20 md:p-10 p-4">

                   <div className="categoriasfooter-1 space-y-2 lg:space-y-4 flex flex-col text-center lg:text-start">
                        <h1 className="text-white xl:text-3xl lg:text-2xl md:text-lg text-lg font-roboto">
                          {miseccion.titulocategoriafooter}
                        </h1>

                        <p className="text-white xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                        {miseccion.subtitulocategoriafooter}
                        </p>

                   </div>

                   <div className="categoriasfooter-2 pt-4">
                       
                       <div className="flex flex-col lg:justify-end lg:items-end lg:text-end text-center items-center justify-center">
                        <h1 className="text-white xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                        {miseccion.titulo2categoriafooter}
                        </h1>

                        <h1 className="text-white xl:text-3xl lg:text-2xl md:text-lg text-lg font-roboto">
                        {miseccion.telefonocategoriafooter}
                        </h1>
                       </div>
                        
                   </div>
                   
            </div>

        </div>

))}
        
    </div>
  )
}

export default CategoriasFooter