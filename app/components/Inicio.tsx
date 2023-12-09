
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Image from 'next/image'
import { getInicio } from '@/sanity/sanity-utils'
import { InicioS } from '@/types/InicioS'


export default async function Inicio() { // Especifica el tipo de estado inicial aquí

        const data = await getInicio();

  return (

        <div className="w-full h-screen">

              {data.map((inicio) => (

            <div key={inicio._id} 
            className="w-full h-screen inset-0 bg-black bg-opacity-50"
            style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${inicio.imageBack})`,
            backgroundSize: 'cover',
          }}
          >

                
            <div className="contenedor-inicio w-full h-full lg:px-12 lg:pb-12 no-select">

               <div className="header-1 h-auto w-full bg-transparent lg:grid flex justify-center items-center lg:justify-start lg:items-start ">

                <div className="lg:p-10">
                  {inicio.image && (
                <Image 
                className="lg:rounded-t-full lg:rounded-b-lg" 
                src={inicio.image} alt={inicio.image} 
                layout={'cover'} 
                objectFit={'cover'} 
                height={150} 
                width={150}> 
                </Image>
                  )}

                </div>

              </div>

               <div className="header-2 w-full h-auto bg-transparent">

                <div className="lg:p-10 grid justify-center items-center lg:flex space-y-2 text-center lg:text-start lg:space-x-10 text-white lg:items-end lg:justify-end xl:text-lg lg:text-lg text-lg">
                    <h1 className="lg:py-4 cursor-pointer ">{inicio.navBar1}</h1>
                    <h1 className="lg:py-4 cursor-pointer ">{inicio.navBar2}</h1>
                    <h1 className="lg:py-4 cursor-pointer ">{inicio.navBar3}</h1>
                    <h1 className="lg:py-4 cursor-pointer">{inicio.navBar4}</h1>
                    <button className="lg:py-3 lg:px-5 p-2 bg-[#385AE0] rounded-md text-white transition-transform duration-500 hover:scale-105">{inicio.navBar5}</button>
                </div>

              </div>

               <div className="inicio-1">
                  
                     <div className="flex lg:pl-10 pt-10 justify-center items-center text-center lg:text-start lg:justify-start lg:items-start">
                     
                     <div className="text-white xl:text-8xl lg:text-6xl md:text-3xl text-3xl font-roboto">
                          {inicio.titulo1} <br></br>
                          {inicio.titulo2} <br></br>
                          {inicio.titulo3}
                      </div>

                     </div>

                  </div>

                  <div className="inicio-2">
                  <div className="lg:inline-block space-y-2 lg:space-y-4 lg:px-10 px-10 lg:justify-start lg:items-start">
                    <div className="">

                    </div>
                        <h1 className="text-white xl:text-2xl lg:text-xl text-md font-inconsolata text-center lg:text-start">
                            {inicio.subtitulo1}
                        </h1>
                        <div className="flex lg:justify-start lg:items-start justify-center items-center">
                        <button className="lg:py-3 lg:px-8 p-2 lg:text-lg bg-[#385AE0] text-white rounded-md font-firasans transition-transform duration-500 hover:scale-105">
                           {inicio.boton1}
                        </button>
                        </div>

                     </div>
                  </div>

                  <div className="inicio-4 pt-4">

                    <div className="flex w-full justify-center lg:justify-start lg:space-x-0 space-x-10">

                    <div className="inline-block lg:space-y-1 lg:px-10 justify-center items-center">
                        <h1 className="text-white xl:text-5xl lg:text-xl text-md font-inconsolata">
                            {inicio.uf}<span className="text-[#EB7A2E]">UF</span> 
                        </h1>
                          
                          <h1 className="text-white/60 xl:text-lg lg:text-lg text-sm font-inconsolata">
                            Propiedades <br /> desde
                        </h1>

                     </div>

                     <div className="grid space-y-1 lg:px-10 ">
                        <h1 className="text-white xl:text-5xl lg:text-xl text-md font-inconsolata">
                        {inicio.mas}<span className="text-[#EB7A2E]">+</span> 
                        </h1>
                        <h1 className="text-white/60 xl:text-lg lg:text-lg text-sm font-inconsolata">
                            Clientes <br /> Satisfechos
                        </h1>
                     </div>

                    </div>

                  </div>

                  <div className="inicio-5 flex">
                  
                     <div className="hidden xl:mx-24 w-full h-full lg:shadow-md lg:shadow-[#385AE0] rounded-t-full lg:rounded-b-lg border-black lg:border-[2px]">
                     {inicio.imageBack && (
                     <Image className="lg:rounded-t-full lg:rounded-b-lg" src={inicio.imageBack} alt={inicio.imageBack} layout={'cover'} objectFit={'cover'} height={4500} width={3000}> 
                     </Image>
                     )}
                     </div>

                  </div>

                  <div className="inicio-6 flex w-full h-full lg:bg-transparent">
                  
                  <div className="lg:m-10 flex w-auto h-auto bg-white">

                  </div>

               </div>

            </div>

            </div>

         ))}    

         </div>
  )
}


