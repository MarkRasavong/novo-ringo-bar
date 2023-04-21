export interface SanityAddress {
  street: string
  number: string
  postalCode: string
  city: string
  province: string
  country: string
}

export interface SanityContactarSchema {
  _id: string
  googlePlaceLink: string
  comoLlegarLink: string
  address: SanityAddress
  phone: string
  llamarButton: string
}

export default {
  name: 'contactar',
  title: 'Página Principal - Contactar',
  type: 'document',
  fields: [
    {
      name: 'googlePlaceLink',
      title: 'Google Place Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'comoLlegarLink',
      title: 'Cómo Llegar Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Dirección',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Calle',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'number',
          title: 'Número',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'postalCode',
          title: 'Código Postal',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'city',
          title: 'Ciudad',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'province',
          title: 'Provincia',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'country',
          title: 'País',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'llamarButton',
      title: 'Texto del botón de Llamar',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
