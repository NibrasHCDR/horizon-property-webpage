import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Swip from '../components/Swuip';
import { BsFillHousesFill } from 'react-icons/bs';
import { getSeccion1 } from '@/sanity/sanity-utils';

import { useRouter } from "next/router";


const Propiedades = async () => {

        const data = await getSeccion1();


  return (
    <div className="bg-[#F5F5F5] lg:pb-12 pb-4">
      {data.map((miseccion) => (
        <div
          key={miseccion._id}
          className="h-screen w-full"
        >
          <div className="contenedor-propiedades w-full h-full lg:p-12 no-select">


            <div className="propiedades-1 w-full h-full">

              <div className="px-20 py-4 flex flex-col space-x-4 lg:space-x-6 justify-center items-center mx-auto w-full">
                <BsFillHousesFill height={150} width={150} className="h-[35px] w-[35px] md:w-[55px] md:h-[55px] lg:w-[55px] lg:h-[55px] text-[#FAB83D]" />
                <h1 className="text-[#385AE0] xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-notoserif">
                  {miseccion.titulo}
                  </h1>
              </div>

            </div>


            <div className="propiedades-2">

              <div className="px-10 lg:px-40 py-4 pb-4 md:pb-8 justify-center items-center text-center flex space-x-4 h-full">
                <h1 className="text-black xl:text-3xl lg:text-2xl text-lg font-inconsolata">
                  {miseccion.subtitulo} <br />
                  {miseccion.subtitulo2}
                </h1>
              </div>

            </div>
            <div className="propiedades-3">
            <div className="px-10 lg:pb-28 space-x-8">
              <div className="w-[275px] md:w-[680px] lg:w-[890px] xl:w-[1150px] mx-auto">
                <Swip />
              </div>
            </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Propiedades;