# Ajustes post-pilotaje — CaféU V1 → V2

**APE 6 — Fase 3.1**
**Base:** hallazgos y ajustes de la Fase 2 (`ape6/Fase2-Pilotaje/`).
**Propósito:** cerrar las brechas detectadas en el pilotaje antes de la evaluación formativa completa.

---

## 1. Brechas detectadas y cambios aplicados

| # | Brecha de la Fase 2 | Evidencia | Cambio en V2 | Verificación |
| :---: | :--- | :--- | :--- | :--- |
| 1 | El botón para quitar un ítem era solo un símbolo `✕` | P2 dudó en T4; H6 en la heurística | Botón con texto **«🗑 Quitar»**, borde visible y `aria-label` con el nombre del producto | T4 bajó de 24 s a **17 s** de mediana |
| 2 | El buscador no encontraba productos al escribir sin tilde | Hallazgo H7 de la Fase 2 | Función `normalizar()`: minúsculas + eliminación de diacríticos (NFD) sobre el nombre y la descripción | T7: **3/3** con éxito autónomo |
| 3 | El aviso «agregado al pedido» se borraba al cambiar de vista | H1 de la heurística: el mensaje se asignaba y se limpiaba en la misma acción | Nuevo `mostrarAviso()`: toast superior, `role="status"`, visible **5 s** y sin borrado al navegar | El aviso ya es perceptible, pero 2/3 participantes no lo notaron → **H-01** |
| 4 | Un pedido vacío podía confirmarse | Función de confirmación sin validación de estado | Botón **deshabilitado** con `aria-describedby`, texto que explica el motivo y guarda en `confirmarPedido()` | T9: 2/3 autónomos, 1 con ayuda → **H-04** |
| 5 | La consigna de T6 era ambigua («¿cuánto pagarías…?») | P2 pidió la pista en la Fase 2 | Consigna reformulada: «Simula agregar 3 croissants y dime el total» | T6: **3/3** con éxito autónomo |
| 6 | El protocolo no probaba buscador, filtros ni prevención | Cobertura de la Fase 2 | Se agregan **T7, T8 y T9** al protocolo | Ver `protocolo-fase3.md` |

> **Nota:** los problemas que el equipo decidió no corregir todavía (copiar el código, indicador de pasos, confirmación al abandonar) **no** se implementaron en V2: quedan como insumo del backlog de la Fase 4.

---

## 2. Reinicio de estado entre sesiones (F5)

El pedido vive **solo en memoria**, por lo que recargar la página restablece todo. El responsable de soporte ejecuta esta lista antes de cada participante:

| Paso | Acción | Estado esperado |
| :---: | :--- | :--- |
| 1 | Presionar **F5** (o recargar) en el navegador | Vista **Inicio** visible |
| 2 | Revisar el contador del carrito | `0` |
| 3 | Abrir **Mi pedido** | Estado vacío y botón «Confirmar» deshabilitado |
| 4 | Volver al menú y revisar el buscador | Campo vacío |
| 5 | Revisar los filtros | «Todas» activo |
| 6 | Recorrer una tarea de humo (agregar y quitar) | Sin errores en consola |
| 7 | Cerrar y reabrir la pestaña si hubo una sesión previa | Mismo estado inicial |

**Registro:** el soporte técnico anota «F5 verificado» en la hoja de observación antes de iniciar el consentimiento.

---

## 3. Alcance de la versión

- **Incluido en V2:** los seis cambios de la tabla anterior.
- **No incluido (Fase 4):** copiar el código, confirmación al abandonar, indicador de pasos, contador con etiqueta y total visible en el menú.
- **Compatibilidad:** la app sigue siendo una SPA sin dependencias externas; se abre con `ape6/prototipo/index.html`.
- **Marca de versión:** el encabezado muestra **CaféU V2** para identificar las capturas de esta fase.

---

## 4. Verificación técnica realizada

| Prueba | Resultado |
| :--- | :--- |
| Sintaxis de `interaccion.js` (`node --check`) | Sin errores |
| Búsqueda `cafe` / `te` sin tilde | Devuelve los productos correctos |
| Búsqueda con filtro incompatible | Muestra el estado vacío (base del hallazgo H-02) |
| Confirmar con pedido vacío | Botón deshabilitado y guarda activa |
| Recarga (F5) | Contador, pedido, buscador y filtro vuelven al estado inicial |
| Recorrido completo de las 9 tareas | Sin errores en consola |
