import {
  SanityDiaObject,
  SanityHorariosSchema,
} from '@/sanity/schemas/horarios';
import { convertToTime } from '@/utils';
import React from 'react';

interface HorariosSectionProps {
  horarios: SanityHorariosSchema;
}

const HorariosSection: React.FC<HorariosSectionProps> = ({ horarios }) => {
  return (
    <section className="bg-ringoRed text-white text-center py-16" id="horarios">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Horarios</h2>
        <div className="grid grid-cols-2 gap-4 md:text-2xl">
          {horarios.dias.map(
            ({
              _key,
              day,
              horaCierre,
              horaInicio,
              abierto,
            }: SanityDiaObject) => (
              <React.Fragment key={_key}>
                <div className="capitalize">{day}</div>
                <div>
                  {abierto
                    ? `${convertToTime(horaInicio)} - ${convertToTime(
                        horaCierre,
                      )}`
                    : 'Cerrado'}
                </div>
              </React.Fragment>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default HorariosSection;
