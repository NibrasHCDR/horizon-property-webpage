import { InicioS } from "@/types/InicioS";
import { PropiedadesS } from "@/types/PropiedadesS";
import { Seccion1 } from "@/types/Seccion1";
import { createClient, groq } from "next-sanity";
import { CategoriasS } from "@/types/CategoriasS";
import { OverviewS } from "@/types/OverviewS";
import { PreferenciaS } from "@/types/PreferenciaS";
import { ContactoS } from "@/types/ContactoS";
import { FooterS } from "@/types/FooterS";
import clientConfig from "./config/client-config";

export const dynamic = 'force-dynamic';
export async function getInicio(): Promise<InicioS[]> {

  return createClient(clientConfig).fetch(
        groq` *[_type == "inicio"]{
            _id,
            _createdAt,
            titulo1,
            titulo2,
            titulo3,
            navBar1,
            navBar2,
            navBar3,
            navBar4,
            navBar5,
            subtitulo1,
            boton1,
            uf,
            mas,
            "slug": slug.current,
            "image": image.asset->url,
            "imageBack": imageBack.asset->url,
            url,
            content
        }`
    );
}



export async function getSeccion1(): Promise<Seccion1[]> {

  return createClient(clientConfig).fetch(
        groq` *[_type == "seccion1"]{
            _id,
            _createdAt,
            titulo,
            subtitulo,
            subtitulo2,
            content
        }`
    );
}

export async function getPropiedades(): Promise<PropiedadesS[]> {

  return createClient(clientConfig).fetch(
        groq` *[_type == "propiedades"]{
            _id,
            _createdAt,
            "imagenpropiedad": imagenpropiedad.asset->url,
            valor,
            descripcion,
            dormitorios,
            banos,
            metros,
            content
        }`
    );
}


export async function getCategorias(): Promise<CategoriasS[]> {

  return createClient(clientConfig).fetch(
        groq` *[_type == "categorias"]{
            _id,
            _createdAt,
            "imagen1": imagen1.asset->url,
            titulo1,
            descripcion1,
            "imagen2": imagen2.asset->url,
            titulo2,
            descripcion2,
            "imagen3": imagen3.asset->url,
            titulo3,
            descripcion3,
            "imagen4": imagen4.asset->url,
            titulo4,
            descripcion4,
            titulocategoriafooter,
            subtitulocategoriafooter,
            titulo2categoriafooter,
            telefonocategoriafooter,
            content
        }`
    );
}

export async function getOverview(): Promise<OverviewS[]> {

  return createClient(clientConfig).fetch(
        groq` *[_type == "overview"]{
            _id,
            _createdAt,
            "imagen1": imagen1.asset->url,
            titulo,
            "imagen2": imagen2.asset->url,
            titulo1,
            descripcion1,
            "imagen3": imagen3.asset->url,
            titulo2,
            descripcion2,
            content
        }`
    );
}

export async function getPreferencia(): Promise<PreferenciaS[]> {

  return createClient(clientConfig).fetch(
        groq` *[_type == "preferencia"]{
            _id,
            _createdAt,
            titulo1,
            titulo2,
            "imagen1": imagen1.asset->url,
            "imagen2": imagen2.asset->url,
            "imagen3": imagen3.asset->url,
            servicio1,
            servicio2,
            servicio3,
            servicio4,
            servicio5,
            content
        }`
    );
}

export async function getContacto(): Promise<ContactoS[]> {

  return createClient(clientConfig).fetch(
        groq` *[_type == "contacto"]{
            _id,
            _createdAt,
            titulo1,
            subtitulo1,
            titulo2,
            placeholderName,
            placeholderApellidos,
            placeholderTelefono,
            placeholderAsunto,
            placeholderMensaje,
            boton,
            content
        }`
    );
}

export async function getFooter(): Promise<FooterS[]> {

  return createClient(clientConfig).fetch(
        groq` *[_type == "footer"]{
            _id,
            _createdAt,
            "imagen1": imagen1.asset->url,
            enlace1,
            enlace2,
            enlace3,
            enlace4,
            linkInstagram,
            linkLinkedin,
            linkWeb,
            textfooter,
            content
        }`
    );
}