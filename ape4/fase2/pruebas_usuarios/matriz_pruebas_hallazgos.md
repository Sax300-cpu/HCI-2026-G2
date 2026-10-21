# EVALUACIÓN COGNITIVA Y MEJORA UX - CASO CAFÉU

## 1. Matriz de Registro de Pruebas de Usabilidad con Pares
Se evaluaron dos tareas representativas de la plataforma CaféU con dos participantes externos al equipo de desarrollo:
- **Tarea 1:** Realizar una orden completa desde la pantalla de Inicio hasta la Confirmación del pedido.
- **Tarea 2:** Modificar la cantidad de un producto dentro del carrito ("Mi pedido") y proceder a eliminar un ítem.

| Participante | Tarea Evaluada | ¿Completó? | Dificultad | Observaciones y Comentarios del Usuario |
| :--- | :--- | :---: | :---: | :--- |
| **Usuario 1** | Tarea 1: Realizar un pedido | Sí | Baja | El recorrido principal fue fluido e intuitivo. Sugirió hacer más visible el botón final de confirmación. |
| **Usuario 1** | Tarea 2: Editar y eliminar ítem | Sí | Media | Dudó un par de segundos buscando la opción para quitar el producto del carrito. |
| **Usuario 2** | Tarea 1: Realizar un pedido | Sí | Baja | Completó la tarea sin inconvenientes ni bloqueos de navegación. |
| **Usuario 2** | Tarea 2: Editar y eliminar ítem | Sí | Baja | Sugirió aumentar el contraste visual en los botones secundarios y de cancelación. |

---

## 2. Hallazgos Identificados y Matriz de Correcciones UX

| # | Hallazgo Identificado | Corrección Aplicada en Fase 2 | Justificación de Usabilidad (HCI) |
| :---: | :--- | :--- | :--- |
| **1** | Dificultad para localizar rápidamente la acción de eliminar un producto del carrito. | Se sustituyó el enlace de texto plano por un botón destacado con ícono de papelera en color rojo. | **Reconocimiento antes que recuerdo (Nielsen):** Facilita la identificación visual inmediata de acciones destructivas o de descarte. |
| **2** | Contraste insuficiente en botones secundarios y enlaces de navegación ("Volver al menú"). | Se incrementó la relación de contraste tipográfico a un ratio superior a 4.5:1. | **Accesibilidad (WCAG 2.1 - Criterio 1.4.3):** Asegura la legibilidad de los elementos interactivos para cualquier tipo de usuario. |
| **3** | Incertidumbre al no recibir una alerta explícita cuando el carrito no contenía elementos. | Se diseñó la vista de estado vacío (*Empty State*) informando que no hay productos y ofreciendo un botón directo de retorno. | **Visibilidad del estado del sistema:** Mantiene informado al usuario sobre la condición actual del flujo sin dejar la pantalla en blanco. |
