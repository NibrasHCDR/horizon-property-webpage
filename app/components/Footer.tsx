
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaInstagram, FaLinkedin} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FooterS } from '@/types/FooterS';
import { getFooter } from '@/sanity/sanity-utils';

type Props = {}

async function Footer({}: Props) {

        const data = await getFooter();


  
  return (
    <div className="bg-[#385AE0] ">

       {data.map((seccion_footer) => (


        <div 
        key={seccion_footer._id}
        className="w-full h-full">

          <div className="contenedor-footer lg:p-20 md:p-10 p-4 space-y-4">
            
             <div className="footer-1">
              
                 <div className="flex justify-center items-center w-full h-full">
                 <Image 
                className="lg:rounded-t-full lg:rounded-b-lg w-auto h-auto" 
                src={seccion_footer.imagen1} 
                alt={seccion_footer.imagen1}
                layout={'cover'} 
                objectFit={'cover'} 
                height={150} 
                width={150}> 
                </Image>
                 </div>

             </div>

             <div className="footer-2">
             
                <div className="flex space-x-4 justify-center items-center text-white no-select">

                <Link href={''}>
                <h1 className="xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                {seccion_footer.enlace1}
                  </h1>
                    </Link>

                  <Link href={''}>
                  <h1 className="xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                  {seccion_footer.enlace2}
                  </h1>
                    </Link>

                  <Link href={'/#propiedades'}>
                  <h1 className="xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                  {seccion_footer.enlace3}
                  </h1>
                  </Link>

                  <Link href={'/#inicio'}>
                  <h1 className="xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                  {seccion_footer.enlace4}
                  </h1>
                  </Link>

              
                </div>

             </div>

             <div className="footer-3">
                 <div className="flex space-x-4 justify-center items-center text-white no-select">

                 <Link href={''}>
                 <FaInstagram className=" w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:text-2xl justify-center items-center">
                   </FaInstagram>
                 </Link>

                  <Link href={''}>
                  <FaLinkedin className=" w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:text-2xl justify-center items-center">
                    
                    </FaLinkedin>
                 </Link>

                  <Link href={''}>
                  <TbWorldWww className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:text-2xl justify-center items-center">
                    
                    </TbWorldWww>
                 </Link>

                </div>
             </div>

             <div className="footer-4">
             
                <div className="flex space-x-4 justify-center items-center text-white">

                <Link href={'https://xplendev.com/'}>
                <h1 className="xl:text-2xl lg:text-xl md:text-md text-md font-inconsolata">
                {seccion_footer.textfooter}
                  </h1>
                </Link>

              
                </div>
             </div>

            </div>

        </div>

))}    
        
    </div>
  )
}

export default Footer