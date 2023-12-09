const footer = {
    name: 'footer',
    title: 'Seccion Pie De Página',
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
            
         name: 'imagen1',
         title: 'Logo de Pie de Página',
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
            name: 'enlace1',
            title:'Nombre de Enlace 1',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(56).warning('No exceder los 56 Caracteres')
         },

         {            
            name: 'enlace2',
            title:'Nombre de Enlace 2',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(56).warning('No exceder los 56 Caracteres')
         },

         {            
            name: 'enlace3',
            title:'Nombre de Enlace 3',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(56).warning('No exceder los 56 Caracteres')
         },
            

        {            
            name: 'enlace4',
            title:'Nombre de Enlace 4',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },

         {            
            name: 'linkInstagram',
            title:'Link Instagram',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },
         {            
            name: 'linkLinkedin',
            title:'Link LinkedIn',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },
         {            
            name: 'linkWeb',
            title:'Link Web',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },
         {            
            name: 'textfooter',
            title:'Texto final de Pie de Página',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(450).warning('No exceder los 450 Caracteres')
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

export default footer