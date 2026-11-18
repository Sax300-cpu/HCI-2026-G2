# Conclusiones — APE 6 (CaféU, fases 3 y 4)

**Universidad Técnica de Ambato — FISEI — Carrera de Software**
**Asignatura:** Interacción Humano-Computador · **Ciclo:** Julio – Diciembre 2026
**Prototipo:** CaféU **V2** · **Evaluación:** 18/11/2026
**Integrantes:** Luis Miranda · Kevin Velasco · Manolo García · Ariel Cholota

---

## 1. Respuesta a la pregunta de evaluación

> «¿En qué medida el prototipo **CaféU** permite a los estudiantes universitarios consultar el menú y realizar pedidos en la cafetería universitaria antes de llegar con **eficacia**, **eficiencia** y **satisfacción**, y qué problemas de usabilidad lo impiden?»

**CaféU V2 permite completar la tarea con un desempeño alto en las tres dimensiones de ISO 9241-11, pero todavía no comunica con claridad el estado del pedido ni ofrece una salida cuando la búsqueda no devuelve resultados.**

| Dimensión | Resultado | Juicio |
| :--- | :--- | :--- |
| **Eficacia** | 96,3 % de éxito autónomo (26/27) · 0 errores críticos · 3 no críticos | **Cumple.** Todas las tareas se completaron; una necesitó la pista única. |
| **Eficiencia** | Las 9 medianas por debajo de su meta; la mayor fue 19 s (T3) y 18 s (T8) | **Cumple.** Ninguna tarea se acercó al tiempo máximo. |
| **Satisfacción** | SUS 86,7 (P1 90,0 · P2 77,5 · P3 92,5) frente a la referencia 68,0 | **Cumple y supera.** Los tres participantes están por encima de 68. |

**Lo que impide la excelencia** no es un fallo de funcionamiento, sino dos problemas de severidad 3 (H-01 y H-02) y cuatro de severidad 2 (H-03, H-04, H-05, H-08). Ninguno bloquea la tarea en el recorrido probado; todos afectan la comprensión del estado, la confianza o la recuperación.

---

## 2. Qué aprendimos de cada fase

### Fase 1 — Planificación
El protocolo se pudo ejecutar sin cambios de fondo: las consignas se entendieron, la hoja de observación cubrió todos los datos y los roles del laboratorio funcionaron. El reinicio de estado (F5) fue el elemento más delicado: sin él, el pedido de un participante contamina al siguiente.

### Fase 2 — Pilotaje
El pilotaje demostró que seis tareas no alcanzaban para cubrir las funciones críticas. Dejó tres brechas concretas (botón de quitar poco visible, buscador sin tildes, aviso demasiado breve) y una lección metodológica: **una consigna ambigua produce un dato ambiguo**. T6 se resolvió reformulando la tarea, no cambiando la interfaz.

### Fase 3 — Aplicación y análisis
Los ajustes post-pilotaje funcionaron y se midieron:

| Cambio | Efecto medido |
| :--- | :--- |
| Botón «Quitar» con texto | T4: de 24 s a 17 s de mediana |
| Buscador con normalización de tildes | T7: 3/3 con éxito autónomo |
| Consigna de T6 reformulada | T6: de 2/3 a 3/3 |
| Confirmación bloqueada con motivo | T9: 2/3 autónomos; el tercero necesitó la pista (H-04) |
| Aviso de 5 s con `role="status"` | El aviso ya no se borra, pero 2/3 no lo notaron (H-01) |

La inspección heurística independiente aportó 7 hallazgos con severidad consensuada; la prueba con usuarios aportó 5. Solo 3 coincidieron.

### Fase 4 — Consolidación
La triangulación mostró que los métodos **no son redundantes**: la heurística detectó el 77,8 % de los hallazgos y los usuarios el 55,6 %, con un solapamiento de un tercio. La heurística encuentra riesgos latentes que el recorrido feliz no dispara; los usuarios revelan expectativas que la inspección no puede anticipar.

---

## 3. Los hallazgos que explican el resultado

| Hallazgo | Sev. | Por qué importa |
| :---: | :---: | :--- |
| **H-01** · Aviso efímero | 3 | El sistema sí responde, pero el usuario no se entera. P2 lo dijo con claridad: «no vi ningún mensaje, pero el contador subió». Es el hallazgo que mejor explica el SUS más bajo. |
| **H-02** · Búsqueda sin salida | 3 | El estado vacío no distingue «no existe» de «el filtro lo oculta». P2 perdió 24 s, el mayor tiempo de la evaluación. |
| **H-04** · Motivo lejos del botón | 2 | El bloqueo es correcto, pero la explicación llega tarde. Generó la única pista de la fase. |
| **H-03** · Pérdida silenciosa | 2 | Salir de la confirmación vacía el pedido sin aviso: un riesgo que las 9 tareas no alcanzaron a mostrar. |
| **H-05** · Código no copiable | 2 | El código es la llave para retirar el pedido y no se puede copiar ni se explica dónde usarlo. |
| **H-08** · Ítem no editable | 2 | Dos participantes tocaron la línea esperando editar; el menú sí es tocable, el pedido no. |
| **H-06, H-07, H-09** | 1 | Cosmético: unidad del contador, pasos del flujo y total en el menú. No justifican una corrección de emergencia. |

---

## 4. ¿El prototipo es usable?

**Sí, con reservas.** Bajo ISO 9241-11, la usabilidad es la medida en que un sistema permite alcanzar objetivos con eficacia, eficiencia y satisfacción **en un contexto de uso especificado**. En el contexto evaluado (estudiantes UTA, pedidos antes de llegar, sesiones de 30 min, Chrome móvil) las tres dimensiones cumplen:

- **Eficacia:** se completaron 26 de 27 ejecuciones sin ayuda.
- **Eficiencia:** todas las medianas quedaron por debajo de la meta, con margen amplio.
- **Satisfacción:** 86,7 de SUS, 18,7 puntos sobre la referencia.

Pero **cumplir las métricas no equivale a no tener problemas**. Los hallazgos de severidad 3 no impidieron terminar las tareas; afectaron la comprensión y la confianza. Un prototipo que se completa «a ciegas» sigue siendo un prototipo que comunica mal.

Por eso la conclusión no es «CaféU es usable» sino: **CaféU es usable para completar el pedido y todavía no lo es para que el usuario entienda lo que ocurre mientras lo hace.**

---

## 5. Limitaciones del estudio

| Limitación | Alcance |
| :--- | :--- |
| 3 participantes, una sesión cada uno | No permite generalizar ni medir aprendizaje. Los hallazgos de un solo usuario se reportan con su frecuencia. |
| Tareas guiadas | El recorrido feliz oculta problemas de exploración libre; por eso se complementó con inspección heurística. |
| Un dispositivo y un navegador | Chrome con viewport 390 × 844; no se evaluó respuesta adaptativa ni otros motores. |
| Prototipo sin backend | No hay tiempos de red, persistencia ni concurrencia que evaluar. |
| Evaluadores del mismo equipo | Se mitigó con inspección individual y severidad por mediana, pero persiste el sesgo de familiaridad. |
| Datos de una sola universidad | El contexto (cafetería FISEI) no representa otros campus. |

---

## 6. Recomendaciones

1. **Corregir primero P1** (H-02, H-01, H-04): son los únicos con severidad 3 o con impacto directo en una métrica.
2. **No rediseñar la interfaz completa:** el SUS de 86,7 y el 96,3 % de éxito no lo justifican; el esfuerzo debe ir a los 9 puntos identificados.
3. **Mantener el protocolo** (F5, pista única, 9 tareas) para la re-evaluación: sin las mismas condiciones, la comparación no es válida.
4. **Re-evaluar con 5 participantes** después de P1 y P2, incluyendo una tarea de exploración libre que pueda disparar H-03 y H-05.
5. **Documentar cada corrección con su criterio técnico** y cerrar el Issue solo con evidencia, no con la percepción de quien programó.
6. **Cuidar la accesibilidad** en las correcciones: H-01, H-04 y H-06 tocan `role="status"`, `aria-describedby` y el nombre accesible del carrito.

---

## 7. Cierre

El APE 6 permitió recorrer el ciclo completo de evaluación: planificar, pilotear, ajustar, medir y consolidar. El resultado más valioso no es el 96,3 % de éxito ni el 86,7 de SUS, sino haber comprobado que **los números altos y los problemas reales conviven**: las tareas se completan y, al mismo tiempo, el usuario no siempre entiende lo que la interfaz le está diciendo.

Esa diferencia entre *poder hacer* y *saber qué está pasando* es la que separa un prototipo funcional de una interfaz usable, y es la que guía el backlog de la siguiente versión.
