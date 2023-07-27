// Leemos las entradas de las opciones
const piedraOpcion = document.getElementById("piedra");
const papelOpcion = document.getElementById("papel");
const tijeraOpcion = document.getElementById("tijera");
const resultado = document.getElementById("resultado");

piedraOpcion.addEventListener("click", () => {
  iniciarJuego('piedra');
});

papelOpcion.addEventListener("click", () => {
  iniciarJuego('papel');
});

tijeraOpcion.addEventListener("click", () => {
  iniciarJuego('tijera');
});

// Funcion de comienzo de juego
function iniciarJuego(opcion) {
  // Muestra movimientos de la Pc
  const movPc = movimientoPc();
  // Muestra movimientos del usuario
  const movUsuario = opcion;
  // Compara movimientos y da el resultado
  const comp = compararMovimientos(movUsuario, movPc);
  // Muestra el resultado
  if (comp === 1) {
    resultado.innerHTML = "Usuario elige " + movUsuario + "<br> PC elige " + movPc + "<br><span class='ganador'>El ganador es usted</span>";
  } else if (comp === 2) {
    resultado.innerHTML = "Usuario elige " + movUsuario + "<br> PC elige " + movPc + "<br><span class='perdedor'>El perdedor es usted</span>";
  } else if (comp === 3) {
    resultado.innerHTML = "Usuario elige " + movUsuario + "<br> PC elige " + movPc + "<br><span class='empate'>La jugada es un empate</span>";
  }
}

// funcion para generar el movimiento de la maquina
function movimientoPc() {
    const opciones = ['piedra', 'papel', 'tijera'];
  const random = Math.floor(Math.random() * 3);
    const mov = opciones[random];
return mov;
}

// funcion para comparar los movimientos
function compararMovimientos(pc, usuario) {
    switch (pc + usuario) {
    case 'piedratijera':
    case 'papelpiedra':
    case 'tijerapapel':
      return 1; // Ud es el ganador
    case 'piedrapapel':
    case 'papeltijera':
    case 'tijerapiedra':
      return 2; // La Pc gana
    default:
      return 3; // Es empate
    }
}











