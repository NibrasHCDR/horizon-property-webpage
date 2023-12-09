import { PortableTextBlock } from "sanity";

export type FooterS = {
    _id: string;
    _createdAt: Date;
    imagen1: string,
    enlace1: string,
    enlace2: string,
    enlace3: string,
    enlace4: string,
    linkInstagram: string,
    linkLinkedin: string,
    linkWeb: string,
    textfooter: string,

    content: PortableTextBlock[];
}