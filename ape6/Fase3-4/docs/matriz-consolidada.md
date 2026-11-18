# Matriz consolidada de hallazgos — CaféU V2

**APE 6 — Fase 4.1 · Consolidación de resultados**
**Prototipo:** CaféU **V2** · **Fecha:** 18/11/2026
**Fuentes:** inspección heurística individual (4 evaluadores) y prueba Think-Aloud (P1, P2, P3).

---

## 1. Regla de consolidación

| Decisión | Regla aplicada |
| :--- | :--- |
| **Severidad** | Mediana de las severidades individuales (Nielsen, 1995). Los hallazgos que solo reportó un método se calificaron con F/I/P a partir de su propia evidencia. |
| **Inclusión** | Se conserva un hallazgo si lo reportó al menos un evaluador **o** se observó en al menos un participante. |
| **Duplicados** | Se fusionaron los reportes que describían el mismo problema en la misma pantalla; se conservó la redacción con mayor evidencia. |
| **Prioridad** | Combina severidad, coincidencia de métodos e impacto en las métricas ISO (ver sección 5). |
| **Numeración** | `H-01` a `H-07` provienen de la inspección; `H-08` y `H-09` surgieron de la observación de usuarios. `C-0x` es el criterio técnico asociado al hallazgo `H-0x`. |

---

## 2. Matriz de hallazgos

| ID | Hallazgo | Heurística | Métodos | Evidencia | Sev. | Dimensión ISO |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| **H-01** | El aviso «agregado al pedido» es efímero y de bajo contraste; 2 de 3 participantes no lo percibieron. | H1 · Visibilidad del estado | Ambos | Heurística 4/4 · P2: «no vi ningún mensaje, pero el contador subió» · P2 y P3 no lo mencionaron al cerrar | **3** | Satisfacción |
| **H-02** | La búsqueda sin resultados no explica la causa (filtro activo) ni ofrece una salida. | H9 · Recuperación de errores | Ambos | Heurística 4/4 · P2: 24 s y «sigo en Comida… ah, tengo que quitar el filtro» | **3** | Eficiencia |
| **H-03** | Salir de la confirmación vacía el pedido sin confirmación previa; el código se pierde. | H3 · Control y libertad | Solo heurística | Heurística 4/4 · no se disparó en las 9 tareas | **2** | Eficacia |
| **H-04** | El motivo del bloqueo de «Confirmar» está separado del botón y en texto pequeño. | H5 · Prevención de errores | Ambos | Heurística 3/4 · P2 necesitó la pista en T9 · P1 lo leyó sin problema | **2** | Eficacia |
| **H-05** | El código de retiro no se puede copiar y no indica qué hacer con él. | H10 · Ayuda y documentación | Solo heurística | Heurística 4/4 · ningún participante intentó copiarlo | **2** | Eficacia |
| **H-06** | El contador del carrito muestra un número sin unidad ni etiqueta. | H1 / H2 · Estado y lenguaje | Solo heurística | Heurística 4/4 · ningún usuario lo comentó | **1** | Satisfacción |
| **H-07** | No hay indicador de pasos del flujo (menú → pedido → listo). | H1 · Visibilidad del estado | Solo heurística | Heurística 3/4 · ningún usuario preguntó «cuánto falta» | **1** | Satisfacción |
| **H-08** | Tocar un ítem del pedido no abre su detalle, aunque en el menú las tarjetas sí son tocables. | H4 · Consistencia y estándares | Solo usuarios | P1 y P2 tocaron la línea esperando editar la cantidad | **2** | Eficiencia |
| **H-09** | Los usuarios buscan el total desde el menú, sin entrar a «Mi pedido». | H6 · Reconocer antes que recordar | Solo usuarios | P3: «quería ver cuánto iba sin salir del menú» | **1** | Eficiencia |

`Métodos`: **Ambos** = inspección y usuarios · **Solo heurística** = no se manifestó en las sesiones · **Solo usuarios** = no lo anticipó la inspección.

---

## 3. Propuesta de mejora por hallazgo

| ID | Mejora propuesta | Criterio | Esfuerzo |
| :---: | :--- | :---: | :---: |
| **H-01** | Confirmación **persistente en el ítem**: la tarjeta del producto pasa a «Agregado ✓» hasta que el usuario cambia de categoría, además del aviso de 5 s. El contador se actualiza con unidad. | C-01 | M |
| **H-02** | Estado vacío **accionable**: mensaje que nombra el filtro activo («No hay coincidencias con el filtro Comida») y dos acciones visibles: «Quitar filtro» y «Ver todas las categorías». Se conserva el término buscado. | C-02 | M |
| **H-03** | **Salida segura**: antes de vaciar el pedido se pide confirmación («¿Vaciar el pedido? Se perderá el código #CU-104») y el código queda accesible en una sección «Pedidos recientes» durante la sesión. | C-03 | M |
| **H-04** | El motivo se mueve **junto al botón**, con icono, mayor contraste y `aria-describedby`; alternativa: botón habilitado que valida al pulsar y explica el faltante. | C-04 | S |
| **H-05** | Botón **«Copiar código»** con confirmación «Copiado» y la instrucción «Muéstralo en caja al recoger». | C-05 | S |
| **H-06** | Contador con **etiqueta y unidad**: «2 productos» en el nombre accesible y en un globo; el número visual se mantiene. | C-06 | S |
| **H-07** | **Indicador de pasos** de tres niveles (Menú · Pedido · Listo) visible en las vistas del flujo, con `aria-current="step"`. | C-07 | M |
| **H-08** | La línea del pedido abre el **detalle editable** (cantidad y quitar) al tocarla; se mantienen los botones actuales como atajo. | C-08 | M |
| **H-09** | **Barra inferior fija** en el menú con «Ver pedido · $5,75» cuando hay al menos un producto. | C-09 | S |

`Esfuerzo`: S ≤ 2 h · M = 3–5 h.

---

## 4. Distribución de los hallazgos

### 4.1 Por severidad

| Severidad | Cantidad | Hallazgos |
| :---: | :---: | :--- |
| 4 · Crítico | 0 | — |
| 3 · Mayor | 2 | H-01, H-02 |
| 2 · Menor | 4 | H-03, H-04, H-05, H-08 |
| 1 · Cosmético | 3 | H-06, H-07, H-09 |

### 4.2 Por dimensión ISO 9241-11

| Dimensión | Hallazgos | Lectura |
| :--- | :---: | :--- |
| **Eficacia** | 3 | H-03, H-04 y H-05 afectan la posibilidad de completar o conservar el pedido. |
| **Eficiencia** | 3 | H-02, H-08 y H-09 agregan pasos o tiempo; H-02 fue el más costoso (24 s en T8). |
| **Satisfacción** | 3 | H-01, H-06 y H-07 deterioran la confianza en el estado; H-01 explica el SUS más bajo (P2, 77,5). |

> Cada hallazgo se contabiliza en su dimensión principal; la suma coincide con los 9 hallazgos.

### 4.3 Por método que lo detectó

| Origen | Cantidad | Hallazgos |
| :--- | :---: | :--- |
| Ambos métodos | 3 | H-01, H-02, H-04 |
| Solo heurística | 4 | H-03, H-05, H-06, H-07 |
| Solo usuarios | 2 | H-08, H-09 |

---

## 5. Criterio de priorización

| Prioridad | Regla | Hallazgos |
| :---: | :--- | :--- |
| **P1** | Severidad 3 **y** confirmado por ambos métodos, o bloqueo de una tarea | H-01, H-02, H-04 |
| **P2** | Severidad 2 con riesgo de pérdida de datos o del código | H-03, H-05 |
| **P3** | Severidad 2 detectado solo por usuarios (expectativa de interacción) | H-08 |
| **P4** | Severidad 1 (cosmético), se agrupa en un solo pulido | H-06, H-07, H-09 |

El detalle de esfuerzos, responsables y trazabilidad con GitHub está en [`backlog.md`](backlog.md).

---

## 6. Conclusión de la consolidación

1. **Ningún hallazgo es crítico (severidad 4).** El prototipo permite completar las nueve tareas; los problemas están en la **comunicación del estado** y en la **recuperación**, no en el funcionamiento.
2. **Los dos hallazgos de severidad 3 coinciden en ambos métodos**, lo que respalda su prioridad sin depender de una sola fuente.
3. **La inspección detectó cuatro problemas latentes** que las nueve tareas no dispararon (H-03, H-05, H-06, H-07). No son defectos teóricos: son riesgos que aparecen con otros recorridos, por ejemplo al salir de la confirmación.
4. **Los usuarios aportaron dos expectativas** (H-08, H-09) que ningún evaluador anticipó, porque dependen de la costumbre de usar aplicaciones de pedidos.
5. La matriz queda cerrada en **9 hallazgos**: 2 mayores, 4 menores y 3 cosméticos.
