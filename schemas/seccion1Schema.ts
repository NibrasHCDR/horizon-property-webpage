const seccion1 = {
    name: 'seccion1',
    title: 'Seccion Propiedades',
    type: 'document',
    fields: [



        /* FIELDS SCHEMA TITULO - SUBTITULOS - IMAGE*/

        {
            name: 'titulo',
            title:'Titulo',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(8).warning('No exceder los 8 Caracteres')
        },
        {
            name: 'subtitulo',
            title:'Subtítulo',
            type: 'string',       
         },
         {
            name: 'subtitulo2',
            title:'Subtítulo 2',
            type: 'string',       
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

export default seccion1