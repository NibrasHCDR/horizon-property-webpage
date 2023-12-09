import { PortableTextBlock } from "sanity";

export type PreferenciaS = {
    _id: string;
    _createdAt: Date;
    titulo1: string,
    titulo2: string,
    imagen1: string,
    imagen2: string,
    imagen3: string,
    servicio1: string,
    servicio2: string,
    servicio3: string,
    servicio4: string,
    servicio5: string,
    
    content: PortableTextBlock[];
}