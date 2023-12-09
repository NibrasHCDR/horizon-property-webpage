const contacto = {
    name: 'contacto',
    title: 'Seccion Contacto',
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
            name: 'subtitulo1',
            title:'Descripción de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(56).warning('No exceder los 56 Caracteres')
         },

         {            
            name: 'titulo2',
            title:'Título 2 de la Sección',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(56).warning('No exceder los 56 Caracteres')
         },
            

        {            
            name: 'placeholderName',
            title:'Placeholder (nombre) del Formulario',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },

         {            
            name: 'placeholderApellidos',
            title:'Placeholder (apellido) del Formulario',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },
         {            
            name: 'placeholderTelefono',
            title:'Placeholder (telefono o correo) del Formulario',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },
         {            
            name: 'placeholderAsunto',
            title:'Placeholder (asunto) del Formulario',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(80).warning('No exceder los 80 Caracteres')
         },
         {            
            name: 'placeholderMensaje',
            title:'Placeholder (mensaje) del Formulario',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(450).warning('No exceder los 450 Caracteres')
         },

         {            
            name: 'boton',
            title:'Botón de Envio de Formulario',
            type: 'string',
            validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any } } }) => Rule.max(25).warning('No exceder los 25 Caracteres')
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

export default contacto