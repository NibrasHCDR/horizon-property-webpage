import { PortableTextBlock } from "sanity";

export type Seccion1 = {
    _id: string;
    _createdAt: Date;
    titulo: string;
    subtitulo: string,
    subtitulo2: string,
    content: PortableTextBlock[];
}