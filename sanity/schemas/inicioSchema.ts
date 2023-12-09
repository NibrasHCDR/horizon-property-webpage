const inicio = {
    name: 'inicio',
    title: 'Seccion NavBar & Portada',
    type: 'document',
    fields: [



        /* FIELDS SCHEMA NAVBAR*/

        {
            name: 'navBar1',
            title:'Servicio de NavBar1',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'navBar2',
            title:'Servicio de NavBar2',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'navBar3',
            title:'Servicio de NavBar3',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'navBar4',
            title:'Servicio de NavBar4',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'navBar5',
            title:'Servicio de NavBar5',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },






        {
            name: 'titulo1',
            title:'Titulo Principal 1',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'titulo2',
            title:'Titulo Principal 2',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'titulo3',
            title:'Titulo Principal 3',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },

        /*SCHEMA SUBTITULO & BOTON*/

        {
            name: 'subtitulo1',
            title:'Subtítulo 1',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'boton1',
            title:'Botón 1',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },


                /*SCHEMA UF y +*/

                {
                    name: 'uf',
                    title:'UF',
                    type: 'string',
                    validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
                },
                {
                    name: 'mas',
                    title:'Clientes Satisfechos signo: +',
                    type: 'string',
                    validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
                },



        {
            name: 'slug',
            title:'Subtitulos NavBar',
            type: 'slug',
            options: { source: 'name'}
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            
            ]
        },
        {
            name: 'imageBack',
            title: 'Image Background',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            
            ]
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url',
        },

        {
            name: 'content',
            title: 'Descripcion de los Cambios Realizados',
            type: "array",
            of: [{ type: "block"}]
        }
    ],

    options: {
        singleton: true, // Esto asegura que solo haya un documento de este tipo
      },
}

export default inicio