import { PortableTextBlock } from "sanity";

export type InicioS = {
    _id: string;
    _createdAt: Date;
    name: string;
    navBar1: string,
    navBar2: string,
    navBar3: string,
    navBar4: string,
    navBar5: string,
    titulo1: string,
    titulo2: string,
    titulo3: string,
    subtitulo1: string,
    boton1: string,
    uf: string,
    mas: string,
    slug: string;
    image: string;
    imageBack: string;
    url: string;
    content: PortableTextBlock[];
}