import { PortableTextBlock } from "sanity";

export type PropiedadesS = {
    _id: string;
    _createdAt: Date;
    imagenpropiedad: string;
    valor: string,
    descripcion: string,
    dormitorios: string,
    banos: string,
    metros: string,
    content: PortableTextBlock[];
}