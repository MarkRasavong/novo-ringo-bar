export interface SanityCartaSchema {
  _id: string
  _type: 'carta'
  nombre: string
  precio: number
  tipo: string
  descripcion?: string
  eng_name?: string
  eng_descripcion?: string
  foto?: {
    _type: 'image'
    asset: {
      _ref: string
    }
  }
}

export default {
  name: 'carta',
  title: 'Carta - Carta',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'number',
      validation: (Rule: any) => Rule.required().precision(2).positive(),
      options: {
        decimalScale: 2,
        fixedDecimalScale: true,
        allowNegative: false,
        decimalSeparator: ',',
        thousandSeparator: '.',
        prefix: '€ ',
      },
    },
    {
      name: 'tipo',
      title: 'Tipo de comida',
      type: 'string',
      options: {
        list: [
          {title: 'Pizzas', value: 'pizzas'},
          {title: 'Bocadillos', value: 'bocadillos'},
          {title: 'Postres', value: 'postres'},
          {title: 'Extras', value: 'extras'},
          {title: 'Pastas', value: 'pastas'},
          {title: 'Para compartir', value: 'para-compartir'},
          {title: 'Bebidas', value: 'bebidas'},
          {title: 'Desayunos', value: 'desayunos'},
          {title: 'Almuerzos', value: 'almuerzos'},
          {title: 'Promociones', value: 'promociones'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'eng_name',
      title: 'English Name',
      type: 'string',
    },
    {
      name: 'eng_descripcion',
      title: 'English Description',
      type: 'text',
    },
    {
      name: 'foto',
      title: 'Foto',
      type: 'image',
    },
  ],
}
