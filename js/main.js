const jugador = {
  nombre: "Messi",
  dorsal: 10,
  posicion: "delantero",
};

const jugador2 = {
  nombre: "Julian Alvarez",
  dorsal: 9,
  posicion: "delantero",
};

const convocados = [jugador, jugador2];

for (const convocado of convocados) {
  console.log(`Jugador: ${convocado.nombre} dorsal: ${convocado.dorsal}`);
}
