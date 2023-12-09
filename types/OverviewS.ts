import { PortableTextBlock } from "sanity";

export type OverviewS = {
    _id: string;
    _createdAt: Date;
    imagen1: string;
    titulo: string,
    imagen2: string,
    titulo1: string,
    descripcion1: string,
    imagen3: string,
    titulo2: string,
    descripcion2: string,
    
    content: PortableTextBlock[];
}