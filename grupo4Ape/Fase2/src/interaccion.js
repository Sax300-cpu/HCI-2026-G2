/* ============================================================
   CaféU — Interacción (3 momentos de la acción)
   Disponible → Confirmada → Cancelada / Reversible
   ============================================================ */

const btnConfirmar = document.getElementById('confirmar');
const btnCancelar = document.getElementById('cancelar');
const estado = document.getElementById('estado');

/** Estado 1: Disponible. El usuario puede confirmar. */
function mostrarDisponible() {
  btnConfirmar.disabled = false;
  btnCancelar.hidden = true;
  estado.textContent = '';
}

/** Estado 2: Confirmada. Se bloquean duplicados y se anuncia el resultado. */
function mostrarConfirmada() {
  // Bloquea el doble envío: deshabilita el botón principal.
  btnConfirmar.disabled = true;

  // Habilita la acción reversible (cancelar) y la muestra.
  btnCancelar.hidden = false;

  // Anuncio de estado para lectores de pantalla.
  estado.textContent = '¡Pedido confirmado! Código #CU-104';

  // Traslada el foco al control ahora disponible (cancelar).
  btnCancelar.focus();
}

/** Estado 3: Cancelada / Reversible. Vuelve al estado disponible. */
function mostrarCancelada() {
  btnCancelar.hidden = true;
  btnConfirmar.disabled = false;
  estado.textContent = 'Pedido cancelado. Puedes confirmar de nuevo.';

  // Devuelve el foco al botón principal.
  btnConfirmar.focus();
}

btnConfirmar.addEventListener('click', mostrarConfirmada);
btnCancelar.addEventListener('click', mostrarCancelada);
