
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { IoMdCheckmark } from "react-icons/io";
import { PreferenciaS } from '@/types/PreferenciaS';
import { getPreferencia } from '@/sanity/sanity-utils';


type Props = {}

async function Preferencia({}: Props) {

          const data = await getPreferencia();
    
  return (
    <div className="bg-[#F5F5F5]">

        
     {data.map((seccion_servicios) => (

        <div
        key={seccion_servicios._id} 
         className="w-full h-full">

            <div className="contenedor-preferencia lg:p-20 md:p-10 p-4">
            
               <div className="preferencia-1">
                
                   <div className="flex flex-col justify-center items-center lg:items-start lg:text-start lg:justify-start">
                       <h1 className="text-[#385AE0] xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-notoserif">
                       {seccion_servicios.titulo1} 
                       </h1>
                   </div>
               </div>

               <div className="preferencia-2">

               <div className="flex flex-col justify-center items-center lg:items-start lg:text-start lg:justify-start">
                       <h1 className="text-black xl:text-3xl lg:text-xl md:text-xl text-xl font-economica">
                       {seccion_servicios.titulo2} 
                       </h1>
                   </div>

               </div>

               <div className="preferencia-3" style={{ borderRadius: '5px', borderTopLeftRadius: '90px', borderTopRightRadius: '5px', borderBottomRightRadius: '90px', borderBottomLeftRadius: '5px' }}>
               
                   <div className="">
                     <Image 
                         className="w-full h-[230px] md:h-[350px] lg:h-full" style={{ borderRadius: '5px', borderTopLeftRadius: '90px', borderTopRightRadius: '5px', borderBottomRightRadius: '90px', borderBottomLeftRadius: '5px' }}
                         height={500}
                         width={500}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={seccion_servicios.imagen1} 
                         alt={seccion_servicios.imagen1} >
                                
                     </Image>
                   </div>

               </div>

              <div className="preferencia-4" style={{ borderRadius: '5px', borderTopLeftRadius: '50px', borderTopRightRadius: '5px', borderBottomRightRadius: '50px', borderBottomLeftRadius: '5px' }}>

              <div className=" w-full h-full">
                     <Image 
                         className="w-full h-full transition-all duration-500 lg:hover:ml-[30px] xl:hover:ml-[70px]" style={{ borderRadius: '5px', borderTopLeftRadius: '50px', borderTopRightRadius: '5px', borderBottomRightRadius: '50px', borderBottomLeftRadius: '5px' }}
                         height={500}
                         width={500}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={seccion_servicios.imagen2}  
                         alt={seccion_servicios.imagen2} >
                                
                     </Image>
                   </div>

               </div>

              <div className="preferencia-5" style={{ borderRadius: '5px', borderTopLeftRadius: '70px', borderTopRightRadius: '5px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '5px' }}>
              
              <div className="">
                     <Image 
                         className="w-full h-[140px] md:h-full transition-all duration-500 lg:hover:ml-[30px] xl:hover:ml-[70px]" style={{ borderRadius: '5px', borderTopLeftRadius: '70px', borderTopRightRadius: '5px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '5px' }}
                         height={500}
                         width={500}
                         layout={'cover'}
                         objectFit={'cover'}
                         src={seccion_servicios.imagen3}  
                         alt={seccion_servicios.imagen3} >
                                
                     </Image>
                   </div>
              
               </div>

               <div className="preferencia-6">
               
                  <div className="w-full h-full flex flex-col space-y-2 pt-8">

                    <div className="flex space-x-2 justify-center items-center">
                        <IoMdCheckmark className="w-8 h-8 text-[#385AE0]">
                        </IoMdCheckmark>

                        <h1 className="text-black xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                        {seccion_servicios.servicio1} 
                        </h1>
                    </div>

                    <div className="flex space-x-2 justify-center items-center">
                        <IoMdCheckmark className="w-8 h-8 text-[#385AE0]">
                        </IoMdCheckmark>

                        <h1 className="text-black xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                        {seccion_servicios.servicio2} 
                        </h1>
                    </div>

                    <div className="flex space-x-2 justify-center items-center">
                        <IoMdCheckmark className="w-8 h-8 text-[#385AE0]">
                        </IoMdCheckmark>

                        <h1 className="text-black xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                        {seccion_servicios.servicio3} 
                        </h1>
                    </div>

                    <div className="flex space-x-2 justify-center items-center">
                        <IoMdCheckmark className="w-8 h-8 text-[#385AE0]">
                        </IoMdCheckmark>

                        <h1 className="text-black xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                        {seccion_servicios.servicio4} 
                        </h1>
                    </div>

                    <div className="flex space-x-2 justify-center items-center">
                        <IoMdCheckmark className="w-8 h-8 text-[#385AE0]">
                        </IoMdCheckmark>

                        <h1 className="text-black xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                        {seccion_servicios.servicio5} 
                        </h1>
                    </div>

                  </div>

               </div>
               
            </div>
        </div>

))}    
        
    </div>
  )
}

export default Preferencia