export interface SanityImagenObjeto {
  _key: string
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
  description: string
}

export interface SanityGaleriaSchema {
  _id: string
  title: string
  images: SanityImagenObjeto[]
}

export default {
  name: 'galeria',
  title: 'Página Principal - Galeria',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Imagen',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'description',
              type: 'text',
              title: 'Descripción',
              description:
                'Agrega una descripción para la imagen (debe ser descriptiva para usuarios que no pueden ver la imagen).',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.min(9),
    },
  ],
}
