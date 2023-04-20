export default {
  name: 'horario',
  title: 'Horario',
  type: 'document',
  fields: [
    {
      name: 'lunes',
      title: 'Lunes',
      type: 'object',
      fields: [
        {name: 'abierto', title: 'Abierto', type: 'boolean'},
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
    {
      name: 'martes',
      title: 'Martes',
      type: 'object',
      fields: [
        {name: 'abierto', title: 'Abierto', type: 'boolean'},
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
    {
      name: 'miercoles',
      title: 'Miércoles',
      type: 'object',
      fields: [
        {name: 'abierto', title: 'Abierto', type: 'boolean'},
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
    {
      name: 'jueves',
      title: 'Jueves',
      type: 'object',
      fields: [
        {name: 'abierto', title: 'Abierto', type: 'boolean'},
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
    {
      name: 'viernes',
      title: 'Viernes',
      type: 'object',
      fields: [
        {name: 'abierto', title: 'Abierto', type: 'boolean'},
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
    {
      name: 'sabado',
      title: 'Sábado',
      type: 'object',
      fields: [
        {name: 'abierto', title: 'Abierto', type: 'boolean'},
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
    {
      name: 'domingo',
      title: 'Domingo',
      type: 'object',
      fields: [
        {name: 'abierto', title: 'Abierto', type: 'boolean'},
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
}
