import { PortableTextBlock } from "sanity";

export type ContactoS = {
    _id: string;
    _createdAt: Date;
    titulo1: string,
    subtitulo1: string,
    titulo2: string,
    placeholderName: string,
    placeholderApellidos: string,
    placeholderTelefono: string,
    placeholderAsunto: string,
    placeholderMensaje: string,
    boton: string,

    content: PortableTextBlock[];
}