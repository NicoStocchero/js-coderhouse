// Se le da la bienvenida al usuario. Explicando el funcionamiento
alert(
  "Bienvenido. Estás por reservar un turno de Padel. Presiona 'Aceptar' para continuar."
);

//Arrays y funciones globales
//Fechas disponibles
const fechasDisponibles = [
  "01/04/2025",
  "02/04/2025",
  "03/04/2025",
  "04/04/2025",
  "05/04/2025",
];
//Horarios del club (08 a 23hs)
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
//Historial de reservas
const historialDeReservas = [];
//Historial de reservas. Agrega la reserva al array del historial de reservas.
function registrarReservaenHistorial(reserva) {
  historialDeReservas.push(reserva);
  alert("Reserva registrada en el historial.");
}
//Muestra al usuario todas las reservas que ha ido realizando hasta que salga del ciclo.
function mostrarHistorialDeReservas() {
  if (historialDeReservas.length === 0) {
    alert("No hay reservas registradas en el historial.");
  } else {
    let historial = "Historial de Reservas:\n\n";
    for (let i = 0; i < historialDeReservas.length; i++) {
      let reserva = historialDeReservas[i];
      historial += `Reserva ${i + 1}: ${reserva.nombre} - ${
        reserva.fechaDeLaReserva
      } - ${reserva.horarioDeLaReserva}\n\n`;
    }
    alert(historial);
  }
}

//Ingresa su nombre. En caso de que no inserte nada, el nombre por defecto será "Usuario".
//Se le agregó un ciclo while para que pueda incorporar varios registros en un historial. Aún no comprueban si ocupan esos lugares.
let otraReserva = true;
while (otraReserva) {
  let nombre = prompt("Ingrese su nombre: ");
  if (!nombre) {
    nombre = "Usuario";
  }
  alert(
    "Hola " +
      nombre +
      ".\n\nA continuación se te mostrarán las 5 próximas fechas disponibles.\nHaz clic en 'Aceptar' para elegir una de ellas."
  );

  //El usuario decidirá dando en aceptar a la fecha disponible.
  const fechaSeleccionada = [];
  for (let fecha of fechasDisponibles) {
    if (confirm("¿Quieres seleccionar esta fecha?\n\n" + fecha)) {
      fechaSeleccionada.push(fecha);
      break;
    }
  }
  alert("La fecha seleccionada es: " + fechaSeleccionada);

  //Debe ingresar la hora HH:MM en bloques de 30min.
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

  //Declara el tiempo de juego. Que va desde los 30min hasta los 180min como máximo. En bloques de 30.
  let tiempoMaximoDelTurno = 180;
  let tiempoDelTurno;
  do {
    let entrada = prompt(
      "Ingresa la duración de tu reserva en minutos (múltiplos de 30).\nEjemplo: 30, 60, 90... hasta 180."
    );
    if (entrada === null) break;
    tiempoDelTurno = parseInt(entrada);
  } while (
    isNaN(tiempoDelTurno) ||
    tiempoDelTurno % 30 !== 0 ||
    tiempoDelTurno < 30 ||
    tiempoDelTurno > tiempoMaximoDelTurno
  );

  //Calcula si el horario entra dentro de los valores del Array de los horarios del club.
  let horarioFinal;
  if (horariosDisponibles.includes(horarioSeleccionado)) {
    const horarioInicio = horariosDisponibles.indexOf(horarioSeleccionado);
    const intervaloDeHorario = parseInt(tiempoDelTurno / 30);
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

  //Crea un objeto con los datos de la reserva. Los comunica a todos: nombre, fecha y horarios.
  const reserva = {
    nombre: nombre,
    fechaDeLaReserva: fechaSeleccionada.length
      ? fechaSeleccionada[0]
      : "Fecha no seleccionada.",
    horarioDeLaReserva: horarioFinal
      ? horarioSeleccionado + " a " + horarioFinal
      : "Horario no seleccionado.",
  };
  alert(`Datos de la reserva:
Nombre: ${reserva.nombre}
Fecha de la reserva: ${reserva.fechaDeLaReserva}
Horario de la reserva: ${reserva.horarioDeLaReserva}`);

  registrarReservaenHistorial(reserva);
  mostrarHistorialDeReservas();

  otraReserva = confirm("¿Quieres realizar otra reserva?");
}
alert("Fin de la gestión de reservas.");
