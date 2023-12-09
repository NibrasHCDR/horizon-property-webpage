"use client"
import { getCategorias } from '@/schemas/sanity-utils';
import React, { useEffect, useState } from 'react'

type Props = {}

function CategoriasFooter({}: Props) {

    interface Categorias {
        _id: string;
        _createdAt: Date;
        imagen1: string;
        titulo1: string,
        descripcion1: string,
        imagen2: string,
        titulo2: string,
        descripcion2: string,
        imagen3: string,
        titulo3: string,
        descripcion3: string,
        imagen4: string,
        titulo4: string,
        descripcion4: string,
        titulocategoriafooter: string,
        subtitulocategoriafooter: string,
        titulo2categoriafooter: string,
        telefonocategoriafooter: string,
       
        // Otros campos de Seccion1
      }
      
        const [seccion, setSeccion] = useState<Categorias[]>([]); // Especifica el tipo de estado inicial aquí
      
        useEffect(() => {
          async function fetchData() {
            try {
              const categoriaFetch = await getCategorias();
              setSeccion(categoriaFetch);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
      
          fetchData();
        }, []);

        
  return (
    <div className="bg-[#385AE0]">

        {seccion.map((miseccion) => (

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