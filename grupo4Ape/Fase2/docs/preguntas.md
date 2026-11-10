# Defensa cruzada QA/UX — CaféU (Confirmación de pedido)

Grupo retador: **G3** · Acta de la defensa (registrar respuestas y comentarios).

## Pregunta técnica 1 — Punto de corte en CSS y orden con Tab

**Pregunta:** ¿Qué cambia en CSS al cruzar el punto de corte (48rem) y cómo se
asegura que no se altera el orden por teclado con Tab?

**Respuesta:**

Al cruzar `@media (min-width: 48rem)` (768 px), el contenedor `.pedido` cambia de
un layout de **una columna** (flex-columna) a **dos columnas** mediante CSS Grid:

```css
.pedido { display: flex; flex-direction: column; }   /* móvil */

@media (min-width: 48rem) {
  .pedido {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    grid-template-areas: "titulo titulo" "items resumen" "estado estado";
  }
}
```

El punto clave es que **el orden del DOM no cambia**: los elementos siguen siendo
`<header> → <h1> → <ul class="items"> → <section class="resumen"> → <p class="estado">`.
Solo se **reubica visualmente** cada bloque con `grid-area`, sin reordenar los
nodos. Como el orden de tabulación lo determina el **orden del documento** (y no
la posición visual), el usuario que navega con Tab recorre siempre la misma
secuencia lógica en móvil y en escritorio. Esto respeta el principio de
**independencia del orden de lectura** (WCAG) y evita que el teclado "salte" de
forma confusa entre resoluciones.

## Pregunta técnica 2 — Prevención de envíos duplicados y gestión del foco

**Pregunta:** ¿Cómo evitan acciones repetidas y dónde queda el foco tras confirmar
y cancelar?

**Respuesta:**

La acción "Confirmar pedido" pasa por tres estados gestionados en `interaccion.js`:

1. **Disponible:** el botón `#confirmar` está habilitado.
2. **Confirmada:** al hacer clic se ejecuta `btnConfirmar.disabled = true`, lo que
   **bloquea el doble envío** (el botón deja de responder a clics repetidos). Se
   muestra el mensaje `¡Pedido confirmado! Código #CU-104` en un
   `<p role="status" aria-live="polite">`, y se revela el botón "Cancelar pedido".
3. **Cancelada / Reversible:** al pulsar "Cancelar pedido" se restaura
   `btnConfirmar.disabled = false` y se oculta el botón de cancelar.

La **gestión del foco** es explícita: tras confirmar se ejecuta
`btnCancelar.focus()`, de modo que el foco se traslada al control ahora
disponible; al cancelar, `btnConfirmar.focus()` devuelve el foco al botón
principal. Así el usuario de teclado/lector de pantalla **nunca pierde el punto
de referencia** y no puede generar pedidos duplicados.

## Objeción de diseño — Ajuste geométrico vs. comprensión del usuario

**Objeción:** «Que la pantalla no desborde no significa que el usuario entienda
la interfaz».

**Respuesta:**

Correcto, y son dos problemas distintos que se resuelven con mecanismos
diferentes:

- El **ajuste geométrico** (que no haya scroll horizontal) lo resuelve el CSS
  responsive: Mobile-First, `overflow-x: hidden`, `max-width: 100%` y el cambio
  a dos columnas en `48rem`. Esto garantiza que el contenido **quepa** en el
  viewport, pero no que se **entienda**.

- La **comprensión del estado** se resuelve con semántica y retroalimentación:
  HTML semántico (`<h1>`, `<dl>`, `<button>` nativo), etiquetas claras
  ("Total a pagar", "Confirmar pedido"), el mensaje de estado anunciado con
  `role="status"` + `aria-live`, el foco visible (`:focus-visible`) y la
  deshabilitación del botón para comunicar que la acción ya ocurrió.

La medición de `scrollWidth <= innerWidth` demuestra el ajuste visual; la prueba
de observación (tiempos, errores, solicitudes de ayuda) y el anuncio de estado
demuestran la comprensión. Por eso la entrega incluye **ambos** tipos de
evidencia.
