"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { OverviewS } from '@/types/OverviewS';
import { getOverview } from '@/sanity/sanity-utils';

type Props = {}

function Overview({}: Props) {

  const [seccion, setSeccion] = useState<OverviewS[]>([]); // Especifica el tipo de estado inicial aquí

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getOverview();
        setSeccion(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
    

  
  return (
    <div className="bg-[#F5F5F5]">

       {seccion.map((seccion_inicio) => (

        <div 
        key={seccion_inicio._id} 
        className="h-full w-full lg:p-20 md:p-10 p-4">

            <div className="contenedor-overview">

                  <div className="overview-1 md:pb-4 pb-2">
                  
                    <div className="flex flex-col justify-center items-center text-center">

                                                        
                        <Image 
                         className="w-[35] h-[35]"
                         height={150} 
                         width={150}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={seccion_inicio.imagen1} 
                         alt={seccion_inicio.imagen1}>
                                
                         </Image>

                        <h1 className="text-[#385AE0] xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-notoserif">
                        {seccion_inicio.titulo}
                        </h1>

                    </div>
                    
                  </div>

                  <div className="overview-2">
                  
                 <div className="w-full h-full"
>
                                
                         <Image 
                         className="w-full h-full brightness-filter"
                         height={500}
                         width={500}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={seccion_inicio.imagen2}
                         alt={seccion_inicio.imagen2}>
                                
                         </Image>
                     </div>
                  </div>

                  <div className="overview-3 p-4 md:p-6 lg:p-0 lg:pl-10 lg:py-4 xl:p-0 xl:py-8 xl:pl-20">
                  
                        <div className="flex flex-col space-y-2 justify-end text-end">
                            <h1 className="text-white lg:text-black xl:text-4xl lg:text-2xl md:text-lg text-lg font-roboto">
                            {seccion_inicio.titulo1}
                            </h1>
                             
                             <p className="text-white lg:text-black xl:text-3xl lg:text-xl md:text-md text-lg font-economica">
                              {seccion_inicio.descripcion1}
                             </p>

                        </div>
                  </div>

                  <div className="overview-4 p-4 md:p-6 lg:p-0 lg:pr-10 lg:py-4 xl:p-0 xl:py-8 xl:pr-20">
                  <div className="flex flex-col space-y-2">
                            <h1 className="text-white lg:text-black xl:text-4xl lg:text-2xl md:text-lg text-lg font-roboto">
                            {seccion_inicio.titulo2}
                            </h1>
                             
                             <p className="text-white lg:text-black xl:text-3xl lg:text-xl md:text-md text-lg font-economica">
                             {seccion_inicio.descripcion2}
                             </p>

                        </div>
                  </div>

                  <div className="overview-5 bg-green-400">
                     <div className="w-full h-full">
                                
                         <Image 
                         className="w-full h-full brightness-filter"
                         height={500}
                         width={500}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={seccion_inicio.imagen3} 
                         alt={seccion_inicio.imagen3}>
                                
                         </Image>
                     </div>
                  </div>

            </div>

        </div>

))}    

    </div>
  )
}

export default Overview