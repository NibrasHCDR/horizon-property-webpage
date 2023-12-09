const propiedades = {
    name: 'propiedades',
    title: '* Propiedades',
    type: 'document',
    fields: [

        /* FIELDS SCHEMA PROPIEDADES*/

        {
            name: 'imagenpropiedad',
            title: 'Imagen de la Propiedad',
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
            name: 'valor',
            title: 'Valor de la Propiedad',
            type: 'string',
        },

        {
            name: 'descripcion',
            title: 'Descripcion de la Propiedad',
            type: 'string',
        },

        {
            name: 'dormitorios',
            title: 'Cantidad de Dormitorios de la Propiedad',
            type: 'string',
        },

        {
            name: 'banos',
            title: 'Cantidad de Baños de la Propiedad',
            type: 'string',
        },

        {
            name: 'metros',
            title: 'Tamaño en Metros Cuadrados de la Propiedad',
            type: 'string',
        },

        {
            name: 'content',
            title: 'Descripcion de los Cambios Realizados',
            type: "array",
            of: [{ type: "block"}]
        }
    ],

}

export default propiedades 