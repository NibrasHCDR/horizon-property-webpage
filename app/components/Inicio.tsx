import React from 'react'
import Header from './Header'
import Image from 'next/image'

type Props = {}

function Inicio({}: Props) {

    const imagenProperty = 'https://i.postimg.cc/NMvrFCY9/r-architecture-ITTBf-Hm-O8e0-unsplash.jpg'
    const logoProperty = 'https://i.postimg.cc/vZr95vNJ/horizonproperty-logo-tranpsarent.png'
  return (

        <div className="w-full h-screen bg-gradient-to-r from-[#0F0F0F] to-[#3A3A3A]">

            <div className="h-full w-full">

                
            <div className="contenedor-inicio w-full h-full lg:px-12 lg:pb-12 no-select">

               <div className="header-1 h-auto w-full bg-transparent lg:grid flex justify-center items-center lg:justify-start lg:items-start ">

                <div className="lg:p-10">
                <Image className="lg:rounded-t-full lg:rounded-b-lg" src={logoProperty} alt={''} layout={'cover'} objectFit={'cover'} height={150} width={150}> 
                     </Image>
                </div>

              </div>

               <div className="header-2 w-full h-auto bg-transparent">

                <div className="lg:p-10 grid justify-center items-center lg:flex space-y-2 text-center lg:text-start lg:space-x-10 text-white lg:items-end lg:justify-end xl:text-lg lg:text-lg text-lg">
                    <h1 className="lg:py-4">Propiedades</h1>
                    <h1 className="lg:py-4">Servicios</h1>
                    <h1 className="lg:py-4">Productos</h1>
                    <h1 className="lg:py-4">Información</h1>
                    <button className="lg:py-3 lg:px-5 p-2 bg-[#385AE0] rounded-md text-white">Contactame</button>
                </div>

              </div>

               <div className="inicio-1">
                  
                     <div className="flex lg:p-10 pt-10 justify-center items-center text-center lg:text-start lg:justify-start lg:items-start">
                        <h1 className="text-white xl:text-8xl lg:text-5xl md:text-4xl text-3xl font-roboto">
                            Descrubre Cual <br /> Es Tu Nueva <br /> Propiedad
                        </h1>
                     </div>

                  </div>

                  <div className="inicio-2">
                  <div className="lg:inline-block space-y-2 lg:space-y-4 lg:px-10 px-10 lg:justify-start lg:items-start">
                    <div className="">

                    </div>
                        <h1 className="text-white xl:text-2xl lg:text-xl text-md font-inconsolata text-center lg:text-start">
                            Este es un lore ipsum de la ipsum comsumingsum sum sum ccioossiimm colosusmmms
                        </h1>
                        <div className="flex lg:justify-start lg:items-start justify-center items-center">
                        <button className="lg:py-3 lg:px-8 p-2 lg:text-lg bg-[#385AE0] text-white rounded-md font-firasans">
                           Buscar
                        </button>
                        </div>

                     </div>
                  </div>

                  <div className="inicio-4">

                    <div className="flex w-full justify-center lg:justify-start lg:space-x-0 space-x-10">

                    <div className="inline-block lg:space-y-1 lg:px-10 justify-center items-center">
                        <h1 className="text-white xl:text-5xl lg:text-xl text-md font-inconsolata">
                            1.200<span className="text-[#EB7A2E]">UF</span> 
                        </h1>
                          
                          <h1 className="text-white/60 xl:text-lg lg:text-lg text-sm font-inconsolata">
                            Propiedades <br /> desde
                        </h1>

                     </div>

                     <div className="grid space-y-1 lg:px-10 ">
                        <h1 className="text-white xl:text-5xl lg:text-xl text-md font-inconsolata">
                            2Mil<span className="text-[#EB7A2E]">+</span> 
                        </h1>
                        <h1 className="text-white/60 xl:text-lg lg:text-lg text-sm font-inconsolata">
                            Clientes <br /> Satisfechos
                        </h1>
                     </div>

                    </div>

                  </div>

                  <div className="inicio-5 flex">
                  
                     <div className="xl:mx-24 flex w-full h-full lg:shadow-md lg:shadow-[#385AE0] rounded-t-full lg:rounded-b-lg border-black lg:border-[2px]">
                     <Image className="lg:rounded-t-full lg:rounded-b-lg" src={imagenProperty} alt={''} layout={'cover'} objectFit={'cover'} height={4500} width={3000}> 
                     </Image>
                     </div>

                  </div>

                  <div className="inicio-6 flex w-full h-full lg:bg-transparent bg-black/75">
                  
                  <div className="lg:m-10 flex w-auto h-auto bg-white">

                  </div>

               </div>

            </div>

            </div>

         </div>
  )
}

export default Inicio