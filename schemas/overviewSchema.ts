const overview = {
    name: 'overview',
    title: 'Seccion Hero',
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
            title: 'Imagen de Cabecera De La Seccion',
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
            name: 'titulo',
            title:'Título General de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(25).warning('No exceder los 25 Caracteres')
            },

        {
            name: 'imagen2',
            title: 'Primera Imagen de la Seccion',
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
            title:'Título de apartado 1',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(30).warning('No exceder los 30 Caracteres')
        },
        {
            name: 'descripcion1',
            title:'Descripción apartado 1',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(60).warning('No exceder los 60 Caracteres')
        },

                /* SCHEMA DE CATEGORIAS 2*/
        {
            name: 'imagen3',
            title: 'Segunda Imagen de la Sección',
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
            title:'Título de apartado 2',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(30).warning('No exceder los 30 Caracteres')
        },
        {
            name: 'descripcion2',
            title:'Descripción apartado 2',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(60).warning('No exceder los 60 Caracteres')
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

export default overview