const categorias = {
    name: 'categorias',
    title: 'Seccion Categorias',
    type: 'document',
    fields: [



        /* FIELDS SCHEMA CONTENIDO CATEGORIA Y CATEGORIAFOOTER*/

        /* SCHEMA DE CATEGORIAS 1*/
        {
            name: 'imagen1',
            title: 'Imagen de Categoría 1',
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
            name: 'titulo1',
            title:'Título de Categoría 1',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'descripcion1',
            title:'Descripción de Categoría 1',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },

                /* SCHEMA DE CATEGORIAS 2*/
        {
            name: 'imagen2',
            title: 'Imagen de Categoría 2',
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
            name: 'titulo2',
            title:'Título de Categoría 2',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'descripcion2',
            title:'Descripción de Categoría 2',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },


              /* SCHEMA DE CATEGORIAS 3*/


        {
            name: 'imagen3',
            title: 'Imagen de Categoría 3',
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
            name: 'titulo3',
            title:'Título de Categoría 3',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'descripcion3',
            title:'Descripción de Categoría 3',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },

                      /* SCHEMA DE CATEGORIAS 4*/


                      {
                        name: 'imagen4',
                        title: 'Imagen de Categoría 4',
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
                        name: 'titulo4',
                        title:'Título de Categoría 4',
                        type: 'string',
                        validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
                    },
                    {
                        name: 'descripcion4',
                        title:'Descripción de Categoría 4',
                        type: 'string',
                        validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
                    },

             /* SCHEMA DE CATEGORIA FOOTER */
        {
            name: 'titulocategoriafooter',
            title:'Título de Pie de Categorias',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },

        {
            name: 'subtitulocategoriafooter',
            title:'Subtitulo de Pie de Categorias',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'titulo2categoriafooter',
            title:'Título de Pie de Categorias2',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'telefonocategoriafooter',
            title:'Telefono de Pie de Categorias',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
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

export default categorias