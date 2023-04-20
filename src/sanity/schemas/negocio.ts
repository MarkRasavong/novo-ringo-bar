export interface SanityNegocioSchema {
  direccionNegocio: {
    pais: string
    codigoPostal: string
    numero: string
    ciudad: string
    calle: string
  }
  facebook: string
  glovoLink: string
  instagram: string
  justEatLink: string
  nombre: string
  numeroTelefono: string
  telefonoBtnName: string
  urlComoLlegar: string
  urlGoogleLocale: string
  _id: string
}

export default {
  name: 'negocio',
  title: 'Información del Negocio',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Negocio',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'direccionNegocio',
      title: 'Dirección del Negocio',
      type: 'object',
      fields: [
        {
          name: 'calle',
          title: 'Calle',
          type: 'string',
        },
        {
          name: 'numero',
          title: 'Número',
          type: 'string',
        },
        {
          name: 'codigoPostal',
          title: 'Código Postal',
          type: 'string',
        },
        {
          name: 'ciudad',
          title: 'Ciudad',
          type: 'string',
        },
        {
          name: 'pais',
          title: 'País',
          type: 'string',
        },
      ],
    },
    {
      name: 'telefonoBtnName',
      title: 'Nombre de llamar buton',
      type: 'string',
    },
    {
      name: 'numeroTelefono',
      title: 'Número de Teléfono',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    },
    {
      name: 'justEatLink',
      title: 'Enlace de Just Eat',
      type: 'url',
    },
    {
      name: 'glovoLink',
      title: 'Enlace de Glovo',
      type: 'url',
    },
    {
      name: 'urlComoLlegar',
      title: 'Link Como Llegar',
      type: 'url',
    },
    {
      name: 'urlGoogleLocale',
      title: 'Link de Negocio en Google Maps',
      type: 'url',
    },
    {
      name: 'galeria',
      title: 'Galería de fotos (máximo 9)',
      type: 'array',
      of: [
        {
          name: 'foto',
          title: 'Foto',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule: any) => Rule.max(9).warning('Se pueden agregar hasta 9 fotos.'),
        },
      ],
    },
  ],
}
