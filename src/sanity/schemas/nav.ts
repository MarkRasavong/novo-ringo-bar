const navegacionSchema = {
  name: 'navegacion',
  title: 'Principal - Barra de Navegación',
  type: 'document',
  fields: [
    {
      name: 'telefono',
      title: 'Teléfono',
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
  ],
}

export default navegacionSchema
