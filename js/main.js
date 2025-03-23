alert(
  "Bienvenido. Estás por reservar un turno de Padel. Presiona 'Aceptar' para continuar."
);

let nombre = prompt("Ingrese su nombre: ");
if (!nombre) {
  nombre = "Usuario";
}
alert(
  "Hola " +
    nombre +
    ".\n\nA continuación se te mostrarán las 5 próximas fechas disponibles.\nHaz clic en 'Aceptar' para elegir una de ellas."
);

const fechasDisponibles = [
  "01/04/2025",
  "02/04/2025",
  "03/04/2025",
  "04/04/2025",
  "05/04/2025",
];
const fechaSeleccionada = [];
for (let fecha of fechasDisponibles) {
  if (confirm("¿Quieres seleccionar esta fecha?\n\n" + fecha)) {
    fechaSeleccionada.push(fecha);
    break;
  }
}
alert("La fecha seleccionada es: " + fechaSeleccionada);

const horariosDisponibles = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
];
let horarioSeleccionado = prompt(
  "Por favor, ingresa un horario disponible para tu reserva.\nFormato: HH:MM (ejemplo: 08:00, 08:30, ... hasta las 22:30).\nRecuerda que, aunque el último turno inicia a las 22:30, la reserva debe terminar a más tardar a las 23:00."
);
while (!horariosDisponibles.includes(horarioSeleccionado)) {
  alert(
    "El horario seleccionado no está disponible. Por favor, elige uno de los horarios disponibles."
  );
  horarioSeleccionado = prompt(
    "ERROR\nIngresa un horario válido para tu reserva.\nFormato: HH:MM (ejemplo: 08:00, 08:30, ... hasta las 22:30).\nRecuerda que, aunque el último turno inicia a las 22:30, la reserva debe terminar a más tardar a las 23:00."
  );
}

let tiempoMaximoDeJuego = 180;
let tiempoDeJuego;
do {
  let entrada = prompt(
    "Ingresa la duración de tu reserva en minutos (múltiplos de 30).\nEjemplo: 30, 60, 90... hasta 180."
  );
  if (entrada === null) break;
  tiempoDeJuego = parseInt(entrada);
} while (
  isNaN(tiempoDeJuego) ||
  tiempoDeJuego % 30 !== 0 ||
  tiempoDeJuego < 30 ||
  tiempoDeJuego > tiempoMaximoDeJuego
);

let horarioFinal;

if (horariosDisponibles.includes(horarioSeleccionado)) {
  const horarioInicio = horariosDisponibles.indexOf(horarioSeleccionado);
  const intervaloDeHorario = parseInt(tiempoDeJuego / 30);
  const horarioFinalCalculo = horarioInicio + intervaloDeHorario;

  if (horarioFinalCalculo < horariosDisponibles.length) {
    horarioFinal = horariosDisponibles[horarioFinalCalculo];
    alert(`Tu turno es de ${horarioSeleccionado} a ${horarioFinal}`);
  } else {
    alert(
      "El tiempo de juego seleccionado excede el horario disponible del Club."
    );
  }
} else {
  alert("Lo sentimos. El horario seleccionado no está disponible.");
}

const reserva = {
  Nombre: nombre,
  FechaDeLaReserva: fechaSeleccionada.length
    ? fechaSeleccionada[0]
    : "Fecha no seleccionada.",
  HorarioDeLaReserva: horarioFinal
    ? horarioSeleccionado + " a " + horarioFinal
    : "Horario no seleccionado.",
};

alert(`Reserva confirmada:
Nombre: ${reserva.Nombre}
Fecha de la reserva: ${reserva.FechaDeLaReserva}
Horario de la reserva: ${reserva.HorarioDeLaReserva}
¡Te esperamos!`);
