import { PortableTextBlock } from "sanity";

export type CategoriasS = {
    _id: string;
    _createdAt: Date;
    imagen1: string;
    titulo1: string,
    descripcion1: string,
    imagen2: string,
    titulo2: string,
    descripcion2: string,
    imagen3: string,
    titulo3: string,
    descripcion3: string,
    imagen4: string,
    titulo4: string,
    descripcion4: string,
    titulocategoriafooter: string,
    subtitulocategoriafooter: string,
    titulo2categoriafooter: string,
    telefonocategoriafooter: string,
    

    content: PortableTextBlock[];
}