export interface SanityDiaObject {
  day: string
  horaInicio: number
  horaCierre: number
  abierto?: boolean
  _key: string
}

export interface SanityHorariosSchema {
  _id: string
  dias: SanityDiaObject[]
}

export default {
  name: 'horarios',
  title: 'Página Principal - Horarios',
  type: 'document',
  fields: [
    {
      name: 'dias',
      title: 'Días',
      type: 'array',
      of: [
        {
          name: 'dia',
          title: 'Día',
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Día',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
              options: {
                list: [
                  {title: 'Lunes', value: 'lunes'},
                  {title: 'Martes', value: 'martes'},
                  {title: 'Miércoles', value: 'miercoles'},
                  {title: 'Jueves', value: 'jueves'},
                  {title: 'Viernes', value: 'viernes'},
                  {title: 'Sábado', value: 'sabado'},
                  {title: 'Domingo', value: 'domingo'},
                ],
              },
            },
            {
              name: 'abierto',
              title: 'Abierto',
              type: 'boolean',
            },
            {
              name: 'horaInicio',
              title: 'Hora de inicio',
              type: 'number',
              validation: (Rule: any) => Rule.required().precision(2).positive(),
            },
            {
              name: 'horaCierre',
              title: 'Hora de cierre',
              type: 'number',
              validation: (Rule: any) => Rule.required().precision(2).positive(),
            },
          ],
        },
      ],
    },
  ],
}
