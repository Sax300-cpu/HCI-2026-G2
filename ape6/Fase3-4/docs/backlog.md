# Backlog priorizado — CaféU V2 → V3

**APE 6 — Fase 4.4**
**Objetivo:** convertir los 9 hallazgos en trabajo ejecutable, con prioridad, responsable, rama y criterio de cierre.

---

## 1. Priorización

| Prioridad | Significado | Cuándo se atiende |
| :---: | :--- | :--- |
| **P1** | Bloquea la percepción del estado o la recuperación; confirmado por ambos métodos. | Antes de cualquier entrega o demo. |
| **P2** | Riesgo de pérdida de datos o del código de retiro. | Siguiente iteración. |
| **P3** | Expectativa de interacción detectada solo por usuarios. | Siguiente iteración, después de P2. |
| **P4** | Cosmético; no impide la tarea. | Pulido final, agrupado. |

---

## 2. Tabla del backlog

| Orden | ID | Hallazgo | Sev. | Criterio | Esfuerzo | Responsable | Rama | Issue |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- | :--- | :---: |
| 1 | H-02 | Recuperación en la búsqueda sin resultados | 3 | C-02 | 4 h | Kevin Velasco | `fix/h-02-recuperacion-busqueda` | #1 |
| 2 | H-01 | Confirmación de «agregado» perceptible | 3 | C-01 | 3 h | Luis Miranda | `fix/h-01-aviso-agregado` | #2 |
| 3 | H-04 | Motivo del bloqueo junto al botón | 2 | C-04 | 2 h | Manolo García | `fix/h-04-motivo-confirmar` | #3 |
| 4 | H-03 | Salida segura de la confirmación | 2 | C-03 | 3 h | Luis Miranda | `fix/h-03-salida-confirmacion` | #4 |
| 5 | H-05 | Código de retiro copiable | 2 | C-05 | 2 h | Ariel Cholota | `fix/h-05-codigo-copiable` | #5 |
| 6 | H-08 | Ítem del pedido editable | 2 | C-08 | 4 h | Manolo García | `feat/h-08-item-editable` | #6 |
| 7 | H-06 | Contador con unidad y etiqueta | 1 | C-06 | 1 h | Ariel Cholota | `fix/h-06-contador-etiqueta` | #7 |
| 8 | H-07 | Indicador de pasos del flujo | 1 | C-07 | 2 h | Ariel Cholota | `feat/h-07-indicador-pasos` | #8 |
| 9 | H-09 | Total visible desde el menú | 1 | C-09 | 1 h | Kevin Velasco | `feat/h-09-total-en-menu` | #9 |

**Carga total estimada:** 22 h · **P1:** 9 h · **P2:** 5 h · **P3:** 4 h · **P4:** 4 h.

> Los números de Issue son los propuestos; GitHub los asignará al crearlos. La tabla se actualiza después de crearlos.

---

## 3. Iteraciones

| Iteración | Contenido | Resultado esperado |
| :---: | :--- | :--- |
| **1** | H-02, H-01, H-04 (P1) | El usuario percibe el estado de su pedido y sabe cómo salir de una búsqueda vacía. |
| **2** | H-03, H-05 (P2) y H-08 (P3) | El pedido y el código no se pierden; el pedido se edita como en el menú. |
| **3** | H-06, H-07, H-09 (P4) y regresión | Pulido de cabecera y confirmación de que las 9 tareas siguen cumpliendo sus metas. |

Cada iteración cierra con una **re-ejecución de las tareas afectadas** (T2, T8 y T9 en la iteración 1) y una captura comparativa.

---

## 4. Definición de terminado (DoD)

Un Issue se cierra solo si cumple los cinco puntos:

1. **Criterio técnico cumplido** en el umbral definido en [`criterios-tecnicos.md`](criterios-tecnicos.md).
2. **Prueba de regresión** de las 9 tareas sin errores nuevos en consola.
3. **Evidencia adjunta** en el Issue (captura del antes y del después, y tiempo medido si aplica).
4. **Pull Request revisado** por el integrante asignado en la matriz de revisión.
5. **Commit trazable** con el ID del hallazgo en el mensaje (`fix(h-02): ...`).

---

## 5. Reparto de carga

| Integrante | Issues | Horas | Rol en la evaluación |
| :--- | :---: | ---: | :--- |
| Kevin Velasco | H-02, H-09 | 5 h | Cronometrista |
| Luis Miranda | H-01, H-03 | 6 h | Moderador |
| Manolo García | H-04, H-08 | 6 h | Observador |
| Ariel Cholota | H-05, H-06, H-07 | 5 h | Soporte técnico |

El reparto no asigna a cada integrante solo los hallazgos que reportó: se busca que **quien corrige no sea siempre quien evaluó**, para reducir el sesgo de confirmación.

---

## 6. Riesgos del plan

| Riesgo | Probabilidad | Mitigación |
| :--- | :---: | :--- |
| Que la corrección de H-01 oculte el contador o rompa el layout móvil | Media | Verificar en viewport 390 × 844 y con teclado antes de cerrar el Issue. |
| Que el estado vacío de H-02 sea demasiado largo en pantallas pequeñas | Media | Mensaje de una línea + dos botones; probar a 320 px de ancho. |
| Que H-03 agregue fricción al flujo normal | Baja | La confirmación solo aparece si hay un pedido; si está vacío, no se pregunta. |
| Que el equipo no logre crear los Issues en GitHub | Media | Los textos están listos en `github/issues/` y se pueden pegar desde la web. |

---

## 7. Fuera del backlog

| Tema | Decisión |
| :--- | :--- |
| Persistencia real del pedido (backend) | Fuera del alcance del prototipo; el pedido vive en memoria. |
| Notificaciones push del estado del pedido | Requiere backend y no surge de los hallazgos. |
| Rediseño visual completo | No hay evidencia que lo justifique: el SUS es 86,7. |
| Modo oscuro | No apareció en ninguno de los dos métodos. |
