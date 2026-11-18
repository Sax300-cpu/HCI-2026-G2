# Evaluación heurística consolidada — CaféU V2

**APE 6 — Fase 3.2 · Método 1: inspección heurística independiente**
**Evaluadores:** Luis Miranda, Kevin Velasco, Manolo García y Ariel Cholota
**Prototipo:** CaféU **V2** · **Fecha:** 18/11/2026
**Heurísticas:** Nielsen (1994) · **Escala de severidad:** Nielsen (1995)

---

## 1. Escala de severidad

| Valor | Nivel | Descripción |
| :---: | :--- | :--- |
| 1 | Cosmético | No afecta la tarea; se corrige si hay tiempo. |
| 2 | Menor | Genera fricción o duda breve; el usuario se recupera solo. |
| 3 | Mayor | Afecta la comprensión o la eficiencia; requiere corrección prioritaria. |
| 4 | Crítico | Impide o compromete la tarea; debe corregirse antes de liberar. |

Cada evaluador calificó **Frecuencia (F)**, **Impacto (I)** y **Persistencia (P)** de 1 a 4 y calculó:

`S = redondeo((F + I + P) / 3)`

La **severidad consensuada** es la **mediana** de las severidades individuales.

---

## 2. Matriz de severidades por evaluador

| ID | Hallazgo | Luis | Kevin | Manolo | Ariel | **Consenso** |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| H-01 | Aviso «agregado al pedido» efímero y poco perceptible | 3 | 3 | 4 | 3 | **3** |
| H-02 | Búsqueda sin resultados no ofrece recuperación | 3 | 3 | 3 | 3 | **3** |
| H-03 | Salir de la confirmación borra el pedido sin aviso | 2 | 2 | 2 | 2 | **2** |
| H-04 | Motivo del bloqueo de «Confirmar» separado y pequeño | — | 2 | 3 | 2 | **2** |
| H-05 | Código de retiro no copiable ni con instrucción | 2 | 2 | 1 | 2 | **2** |
| H-06 | Contador del carrito sin unidad ni etiqueta | 1 | 1 | 1 | 1 | **1** |
| H-07 | Sin indicador de pasos del flujo | 1 | — | 1 | 1 | **1** |
| H-08 | Tocar un ítem del pedido no abre el detalle | — | — | — | — | **2**\* |
| H-09 | Los usuarios buscan el total desde el menú | — | — | — | — | **1**\* |

`—` = el evaluador no reportó ese hallazgo.
`*` = hallazgo **solo de usuarios**: la severidad se estimó con la evidencia de la prueba Think-Aloud (F/I/P), no con la inspección.

---

## 3. Cobertura por evaluador

| Evaluador | Hallazgos heurísticos reportados | Coincidencias con el consenso |
| :--- | :---: | :--- |
| Luis Miranda | 6 | H-01, H-02, H-03, H-05, H-06, H-07 |
| Kevin Velasco | 6 | H-01, H-02, H-03, H-04, H-05, H-06 |
| Manolo García | 7 | Todos los heurísticos (H-01 a H-07) |
| Ariel Cholota | 7 | Todos los heurísticos (H-01 a H-07) |

**Coincidencia total:** los cuatro evaluadores identificaron por separado **H-01, H-02, H-03, H-05 y H-06**; tres de cuatro identificaron **H-04**; tres de cuatro identificaron **H-07**. La independencia se mantuvo hasta la consolidación: ningún evaluador vio las listas de los demás antes de entregar la suya.

---

## 4. Lectura del equipo

1. Los problemas de severidad **3** (H-01 y H-02) son fallas de **comunicación del estado**, no de funcionamiento: la tarea se completa, pero el usuario no se entera o no sabe cómo salir.
2. Los problemas de severidad **2** (H-03, H-04, H-05) afectan la **confianza** y la **prevención**: pérdida del código, bloqueo sin explicación y ausencia de una acción esperada (copiar).
3. Los problemas de severidad **1** (H-06, H-07) son **cosméticos** y no justifican una corrección inmediata.
4. **H-08** y **H-09** no aparecieron en la inspección: surgieron de la observación de usuarios. Esto confirma el valor de triangular ambos métodos.

---

## 5. Archivos individuales

- [`heuristica-luis.md`](heuristica-luis.md)
- [`heuristica-kevin.md`](heuristica-kevin.md)
- [`heuristica-manolo.md`](heuristica-manolo.md)
- [`heuristica-ariel.md`](heuristica-ariel.md)
