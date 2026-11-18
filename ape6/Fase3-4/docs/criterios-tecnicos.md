# Criterios técnicos verificables — CaféU V2

**APE 6 — Fase 4.3**
**Regla:** cada criterio es **observable**, **medible** y tiene un **umbral de aceptación**. No se acepta «se ve mejor» como criterio de cierre.

**Normas de referencia:**
- **ISO 9241-11:2018** — eficacia, eficiencia y satisfacción en contexto de uso.
- **ISO 9241-110:2020** — principios de diálogo: autodescripción, conformidad con las expectativas, control, tolerancia al error.
- **WCAG 2.2** — pautas de accesibilidad web (nivel A y AA).
- **Nielsen (1994, 1995)** — heurísticas y escala de severidad.

---

## 1. Criterios C-01 a C-09

| ID | Criterio verificable | H | Estándar de respaldo | Cómo se verifica | Umbral de aceptación |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **C-01** | El usuario percibe que el producto se agregó sin depender del contador. | H-01 | ISO 9241-110 · autodescripción · WCAG 4.1.3 (AA) y 1.4.3 (AA) | Re-ejecutar T2 con 3 participantes nuevos; medir si mencionan la confirmación; revisar `role="status"` y contraste del aviso. | 3/3 identifican el cambio · aviso ≥ 5 s · contraste ≥ 4,5:1 · anuncio en lector de pantalla |
| **C-02** | Ante una búsqueda sin resultados, el usuario entiende la causa y tiene una acción de salida. | H-02 | ISO 9241-110 · tolerancia al error · WCAG 3.3.1 (A) y 3.3.3 (AA) | Re-ejecutar T8 con 3 participantes; cronometrar la recuperación sin pista; revisar que el mensaje nombre el filtro activo. | 3/3 recuperan en ≤ 10 s sin pista · el mensaje nombra el filtro · hay ≥ 2 acciones visibles |
| **C-03** | Salir de la confirmación no destruye el pedido sin aviso. | H-03 | ISO 9241-110 · control · WCAG 3.3.1 (A) | Prueba de recorrido: confirmar, pulsar «Volver al menú» y comprobar si el pedido y el código persisten o se pide confirmación. | 0 pérdidas silenciosas · confirmación previa o código recuperable en la sesión |
| **C-04** | El motivo por el que no se puede confirmar está junto al botón y se comprende. | H-04 | WCAG 3.3.1 (A), 3.3.3 (AA), 1.4.1 (A), 1.4.3 (AA) | Re-ejecutar T9; medir tiempo hasta explicar el bloqueo; medir distancia visual y contraste del motivo. | 3/3 explican el motivo en ≤ 5 s · motivo adyacente al botón · contraste ≥ 4,5:1 · `aria-describedby` presente |
| **C-05** | El código de retiro se puede copiar y se explica su uso. | H-05 | ISO 9241-110 · autodescripción · Nielsen H10 | Prueba manual: copiar el código y pegarlo; revisar el texto de instrucción y el aviso de copiado. | Copia en 1 clic · confirmación visible · instrucción «muéstralo en caja» presente |
| **C-06** | El contador del carrito comunica qué cuenta y en qué unidad. | H-06 | WCAG 4.1.2 (A) · ISO 9241-110 · autodescripción | Inspección del nombre accesible del botón del carrito y prueba con un usuario nuevo. | El nombre accesible incluye cantidad y unidad («2 productos») · 3/3 entienden qué representa |
| **C-07** | El usuario sabe en qué paso del flujo está. | H-07 | WCAG 2.4.8 (AAA) · ISO 9241-110 · conformidad con las expectativas | Revisión de las cinco vistas y prueba de teclado. | Indicador visible en las vistas del flujo · `aria-current="step"` correcto · no altera el orden de tabulación |
| **C-08** | Tocar un ítem del pedido abre su detalle editable, igual que en el menú. | H-08 | ISO 9241-110 · conformidad con las expectativas · WCAG 3.2.4 (AA) | Prueba de recorrido y de teclado: tocar/Enter sobre la línea del pedido. | Tocar la línea abre el detalle · 0 controles «muertos» · el detalle permite cambiar cantidad y quitar |
| **C-09** | El total del pedido se puede consultar sin salir del menú. | H-09 | ISO 9241-110 · autodescripción · Nielsen H6 | Re-ejecutar T3 y T6 verificando si el participante abre «Mi pedido» para ver el total. | Total visible con ≥ 1 producto · 3/3 lo leen sin abrir el pedido |

---

## 2. Trazabilidad hallazgo → criterio → Issue

| Hallazgo | Severidad | Criterio | Issue | Prioridad |
| :---: | :---: | :---: | :--- | :---: |
| H-01 | 3 | C-01 | `H-01` | P1 |
| H-02 | 3 | C-02 | `H-02` | P1 |
| H-03 | 2 | C-03 | `H-03` | P2 |
| H-04 | 2 | C-04 | `H-04` | P1 |
| H-05 | 2 | C-05 | `H-05` | P2 |
| H-06 | 1 | C-06 | `H-06` | P4 |
| H-07 | 1 | C-07 | `H-07` | P4 |
| H-08 | 2 | C-08 | `H-08` | P3 |
| H-09 | 1 | C-09 | `H-09` | P4 |

Los textos de los Issues están en [`../github/issues/`](../github/issues/) y el reparto en [`../github/README.md`](../github/README.md).

---

## 3. Protocolo de verificación

1. **Antes de corregir:** capturar el estado actual de cada criterio (evidencia «antes»).
2. **Después de corregir:** aplicar la verificación del criterio con la misma tarea, el mismo dispositivo y el mismo guion.
3. **Regresión:** repetir las 9 tareas del protocolo de la Fase 3 para confirmar que la corrección no rompió otra cosa.
4. **Registro:** anotar en el Issue el resultado (cumple / no cumple), con captura y, si aplica, tiempo medido.
5. **Cierre:** un Issue se cierra solo si su criterio se cumple **y** otro integrante revisó la evidencia.

### Evidencia mínima por criterio

| Tipo de criterio | Evidencia exigida |
| :--- | :--- |
| De percepción (C-01, C-04, C-06, C-07, C-09) | Captura + registro de qué dijo el participante |
| De interacción (C-02, C-03, C-05, C-08) | Captura del antes/después + pasos reproducibles |
| De accesibilidad (C-01, C-04, C-06) | Inspección del DOM y, si es posible, prueba con lector de pantalla |

---

## 4. Qué queda fuera del alcance de esta fase

| Tema | Motivo |
| :--- | :--- |
| Rendimiento y tiempos de carga | El prototipo no tiene backend; no hay red que medir. |
| Pruebas en otros navegadores y dispositivos | Se evaluó Chrome con viewport móvil 390 × 844. |
| Accesibilidad completa (WCAG AAA) | Los criterios cubren A y AA en los puntos afectados por los hallazgos. |
| Seguridad y tratamiento de datos | El pedido vive en memoria y no se persiste. |
