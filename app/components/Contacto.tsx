
import { getContacto } from '@/sanity/sanity-utils';
import { ContactoS } from '@/types/ContactoS';
import React, { useEffect, useState } from 'react'
import { FcAssistant, FcGoogle, FcSms } from "react-icons/fc";

type Props = {}

async function Contacto({}: Props) {

          const data = await getContacto();

    
  return (
    <div className="bg-[]">

        {data.map((seccion_contacto) => (

        <div
        key={seccion_contacto._id}  
        className="w-full h-full">

           <div className="contenedor-contacto lg:space-y-0 lg:p-20 md:p-10 p-4">

                  <div className="contacto-1 flex justify-center lg:items-start items-center text-center">
                  
                   <h1 className="text-[#385AE0] xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-notoserif">
                   {seccion_contacto.titulo1} 
                   </h1>

                  </div>

                    <div className="contacto-2">

                              <h1 className="text-black xl:text-3xl lg:text-xl md:text-xl text-xl font-economica">
                              {seccion_contacto.subtitulo1} 
                              </h1>

                  </div>

                  <div className="contacto-3 flex space-y-2 py-2">
                     
                        <div className="flex flex-col">

                            <h1 className="text-[#385AE0] xl:text-3xl lg:text-2xl md:text-lg text-lg font-roboto">
                            {seccion_contacto.titulo2} 
                            </h1>

                            <div className="flex space-x-2">

                                      <FcAssistant className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 transition-all duration-500 hover:scale-105"></FcAssistant>
                                      <FcGoogle className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 transition-all duration-500 hover:scale-105"></FcGoogle>
                                      <FcSms className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 transition-all duration-500 hover:scale-105"></FcSms>
                                
                            </div>

                        </div>
                     </div>


                  <div className="contacto-4 w-full flex flex-col space-y-2">
                  
                        <div className="flex w-full space-x-2">
  
                        <input placeholder={seccion_contacto.placeholderName} type="text" className="w-full flex-1 border-[#FAB83D]/40 border-solid border-2 rounded-md p-2 focus:border-blue-400 focus:ring-blue-500"/>
                        <input placeholder={seccion_contacto.placeholderApellidos} type="text" className="w-full flex-1 border-[#FAB83D]/40 border-solid border-2 rounded-md p-2 focus:border-blue-400 focus:ring-blue-500"/>

                        </div>

                         <div className="flex flex-col space-y-2">
                            
                         <input placeholder={seccion_contacto.placeholderAsunto} type="text" className="w-full flex-1 border-[#FAB83D]/40 border-solid border-2 rounded-md p-2 focus:border-blue-400 focus:ring-blue-500"/>

                         <input placeholder={seccion_contacto.placeholderTelefono} type="text" className="w-full flex-1 border-[#FAB83D]/40 border-solid border-2 rounded-md p-2 focus:border-blue-400 focus:ring-blue-500"/>

                         <textarea placeholder={seccion_contacto.placeholderMensaje} className="w-full min-h-[180px] max-h-full flex-1 border-[#FAB83D]/40 border-solid border-2 rounded-md p-2 focus:border-blue-400 focus:ring-blue-500"/>

                         <button placeholder={seccion_contacto.boton} className="w-full flex-1 lg:py-3 lg:px-5 p-2 bg-[#385AE0] rounded-md text-white transition-transform duration-500 hover:scale-105"
                         >
                            {seccion_contacto.boton}
                         </button>

                         </div>

                 
                  </div>

           </div>

        </div>

))}    

    </div>
  )
}

export default Contacto