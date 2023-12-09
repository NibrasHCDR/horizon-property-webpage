import Image from 'next/image'
import Inicio from './components/Inicio'
import Header from './components/Header'
import Propiedades from './components/Propiedades'
import Categorias from './components/Categorias'
import CategoriasFooter from './components/CategoriasFooter'
import Overview from './components/Overview'
import Preferencia from './components/Preferencia'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default async function Home() {

  return (

    <>

    <section className="" id="inicio">
    <Inicio>
    </Inicio>
    </section>

    <section className="" id="overview">
        <Overview>
          
        </Overview>
    </section>


    <section className="" id="propiedades">
        <Propiedades>
          
        </Propiedades>
    </section>

    <section className="" id="categorias">
        <Categorias>
          
        </Categorias>
    </section>

    <section className="" id="categoriasfooter">
        <CategoriasFooter>
          
        </CategoriasFooter>
    </section>

    <section className="" id="preferencia">
        <Preferencia>
          
        </Preferencia>
    </section>

    <section className="" id="contacto">
        <Contacto>
          
        </Contacto>
    </section>

    <section className="" id="footer">
        <Footer>
          
        </Footer>
    </section>


    </>
  )
}
