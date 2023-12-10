"use client"
import { getCategorias } from '@/sanity/sanity-utils';
import React, { useEffect, useState } from 'react'
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';

type Props = {}

function Categorias({}: Props) {

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
    <div className="bg-white"> 

{seccion.map((miseccion) => (
        
        <div key={miseccion._id} className="w-full h-full">


             <div className="contenedor-categorias lg:p-20 md:p-10 p-4">

                 <div className="categorias-1">
                       
                    <div className="flex flex-col p-4 lg:p-6 justify-center items-center text-center space-y-1 overflow-hidden transition-all duration-500 hover:scale-105">

                         <Image 
                         className="w-[60px] h-[60px] lg:w-[85px] lg:h-[85px]"
                         height={500}
                         width={500}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={miseccion.imagen1} 
                         alt={miseccion.imagen1}>
                                
                         </Image>

                         <h1 className="text-[#385AE0] xl:text-3xl lg:text-2xl md:text-lg text-lg font-roboto">
                            {miseccion.titulo1}
                         </h1>

                         <p className="text-black xl:text-xl lg:text-md md:text-sm text-sm font-inconsolata">
                         {miseccion.descripcion1}
                         </p>
                    </div>
                        
                 </div>

                 <div className="categorias-2">
                         <div className="flex flex-col p-4 lg:p-6 justify-center items-center text-center space-y-1 overflow-hidden transition-all duration-500 hover:scale-105">

                         <Image 
                         className="w-[60px] h-[60px] lg:w-[85px] lg:h-[85px]"
                         height={500}
                         width={500}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={miseccion.imagen2} 
                         alt={miseccion.imagen2}>
                                
                         </Image>

                         <h1 className="text-[#385AE0] xl:text-3xl lg:text-2xl md:text-lg text-lg font-roboto">
                         {miseccion.titulo2}
                         </h1>

                         <p className="text-black xl:text-xl lg:text-md md:text-sm text-sm font-inconsolata">
                         {miseccion.descripcion2}
                         </p>
                    </div>
                 </div>

                 <div className="categorias-3">
                         <div className="flex flex-col p-4 lg:p-6 justify-center items-center text-center space-y-1 overflow-hidden transition-all duration-500 hover:scale-105">

                         <Image 
                         className="w-[60px] h-[60px] lg:w-[85px] lg:h-[85px]"
                         height={500}
                         width={500}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={miseccion.imagen3} 
                         alt={miseccion.imagen3}>
                                
                         </Image>

                         <h1 className="text-[#385AE0] xl:text-3xl lg:text-2xl md:text-lg text-lg font-roboto">
                         {miseccion.titulo3}
                         </h1>

                         <p className="text-black xl:text-xl lg:text-md md:text-sm text-sm font-inconsolata">
                         {miseccion.descripcion3}
                         </p>
                    </div>
                 </div>

                 <div className="categorias-4">
                    <div className="flex flex-col p-4 lg:p-6 justify-center items-center text-center space-y-1 overflow-hidden transition-all duration-500 hover:scale-105">

                    <Image 
                         className="w-[60px] h-[60px] lg:w-[85px] lg:h-[85px]"
                         height={500}
                         width={500}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={miseccion.imagen4} 
                         alt={miseccion.imagen4}>
                                
                         </Image>

                         <h1 className="text-[#385AE0] xl:text-3xl lg:text-2xl md:text-lg text-lg font-roboto">
                         {miseccion.titulo4}
                         </h1>

                         <p className="text-black xl:text-xl lg:text-md md:text-sm text-sm font-inconsolata">
                         {miseccion.descripcion4}
                         </p>
                    </div>
                 </div>

             </div>

        </div>

))}
        
    </div>
  )
}
export default Categorias