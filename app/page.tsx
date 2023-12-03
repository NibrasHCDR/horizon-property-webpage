import Image from 'next/image'
import Inicio from './components/Inicio'
import Header from './components/Header'
import Propiedades from './components/Propiedades'

export default function Home() {
  return (

    <>

    <section className="" id="inicio">
    <Inicio>
    </Inicio>
    </section>

    <section className="" id="propiedades">
        <Propiedades>
          
        </Propiedades>
    </section>

    </>
  )
}
