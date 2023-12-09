const preferencia = {
    name: 'preferencia',
    title: 'Seccion Servicios',
    type: 'document',
    fields: [



        /* FIELDS SCHEMA CONTENIDO OVERVIEW HERO*/

        /* SCHEMA DE OVERVIEW HERO SECCION*/

        {            
        name: 'tituloSeccion',
        title:'Nombre Representativo de la Sección',
        type: 'string',
        validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(15).warning('No exceder los 15 Caracteres')
        },

        {            
            name: 'titulo1',
            title:'Título Principal de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(56).warning('No exceder los 56 Caracteres')
         },

         {            
            name: 'titulo2',
            title:'Descripción de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(56).warning('No exceder los 56 Caracteres')
         },
        
        {
            
            name: 'imagen1',
            title: 'Imagen 1 de La Seccion',
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
            
            name: 'imagen2',
            title: 'Imagen 2 de La Seccion',
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
            
            name: 'imagen3',
            title: 'Imagen 3 de La Seccion',
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
            name: 'servicio1',
            title:'Servicio 1 de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },

         {            
            name: 'servicio2',
            title:'Servicio 2 de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },
         {            
            name: 'servicio3',
            title:'Servicio 3 de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },
         {            
            name: 'servicio4',
            title:'Servicio 4 de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },
         {            
            name: 'servicio5',
            title:'Servicio 5 de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
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

export default preferencia