const HorariosSection = () => {
  return (
    <section className="bg-ringoRed text-white text-center py-16" id="horarios">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Horarios</h2>
        <div className="grid grid-cols-2 gap-4 md:text-2xl">
          <div>Lunes</div>
          <div>Cerrado</div>
          <div>Martes</div>
          <div>19:00 - 23:00</div>
          <div>Miércoles</div>
          <div>19:00 - 23:00</div>
          <div>Jueves</div>
          <div>19:00 - 23:00</div>
          <div>Viernes</div>
          <div>19:00 - 23:00</div>
          <div>Sábado</div>
          <div>19:00 - 23:00</div>
          <div>Domingo</div>
          <div>19:00 - 23:00</div>
        </div>
      </div>
    </section>
  );
};

export default HorariosSection;
