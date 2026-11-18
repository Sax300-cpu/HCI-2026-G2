# APE 6 — Fases 3 y 4: Aplicación, análisis y cierre

**UNIVERSIDAD TÉCNICA DE AMBATO — FISEI — CARRERA DE SOFTWARE**
**Asignatura:** Interacción Humano-Computador · **Ciclo:** Julio – Diciembre 2026
**Prototipo:** CaféU **V2** (aplicación web móvil de pedidos de cafetería)
**Integrantes:** Luis Miranda · Kevin Velasco · Manolo García · Ariel Cholota

> **Estado:** fases 3 y 4 completas. La Fase 3 mide; la Fase 4 consolida, prioriza y deja el trabajo listo para GitHub.

---

# Parte I — Fase 3: Aplicación y análisis

## 1. Ajuste post-pilotaje (Fase 3.1)

Se revisaron las brechas de la Fase 2 y se aplicaron seis cambios al prototipo:

| # | Brecha | Cambio en V2 | Verificación |
| :---: | :--- | :--- | :--- |
| 1 | Botón de quitar solo con `✕` | Botón **«🗑 Quitar»** con texto y `aria-label` | T4: 24 s → **17 s** |
| 2 | Buscador sin tildes | Normalización NFD (`cafe` ↔ `café`) | T7: **3/3** |
| 3 | Aviso de «agregado» invisible | Toast de 5 s con `role="status"` | Sigue siendo sutil → **H-01** |
| 4 | Pedido vacío confirmable | Botón deshabilitado + motivo + guarda | T9: 2/3 + 1 con ayuda → **H-04** |
| 5 | Consigna ambigua de T6 | Consigna reformulada | T6: **3/3** |
| 6 | Funciones críticas sin probar | Tareas **T7, T8 y T9** | Ver protocolo |

**Reinicio F5:** recargar → contador `0`, pedido vacío, buscador vacío, filtro «Todas», vista Inicio. Lista completa de 7 pasos en [`docs/ajustes-v2.md`](docs/ajustes-v2.md).

---

## 2. Protocolo de la Fase 3 (Fase 3.3)

| ID | Tarea | Meta / Máx | Qué evalúa |
| :---: | :--- | :---: | :--- |
| T1 | Horario de atención | 60 / 120 | Consulta |
| T2 | Agregar sánduche | 60 / 120 | Creación |
| T3 | Agregar dos cafés | 60 / 120 | Modificación |
| T4 | Quitar, confirmar y leer código | 90 / 180 | Modificación + confirmación |
| T5 | Contar productos de comida | 60 / 120 | Consulta + filtros |
| T6 | Total de 3 croissants | 90 / 180 | Cálculo |
| **T7** | **Buscar «cafe» sin tilde** | 60 / 120 | **Buscador (refuerzo)** |
| **T8** | **Filtro Comida + buscar «café»** | 90 / 180 | **Filtros y recuperación (refuerzo)** |
| **T9** | **Confirmar con pedido vacío** | 60 / 120 | **Prevención de errores (refuerzo)** |

Protocolo completo, roles, consentimiento y guion: [`docs/protocolo-fase3.md`](docs/protocolo-fase3.md).

---

## 3. Método 1 — Evaluación heurística independiente (Fase 3.2)

Cada integrante inspeccionó el prototipo por separado con las 10 heurísticas de Nielsen (1994) y asignó severidad de 1 a 4 ponderando **Frecuencia, Impacto y Persistencia**:

`S = redondeo((F + I + P) / 3)`

La severidad consensuada es la **mediana** de los cuatro evaluadores.

| ID | Hallazgo | Luis | Kevin | Manolo | Ariel | Consenso |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| H-01 | Aviso «agregado» efímero y poco perceptible | 3 | 3 | 4 | 3 | **3** |
| H-02 | Búsqueda sin resultados no ofrece recuperación | 3 | 3 | 3 | 3 | **3** |
| H-03 | Salir de la confirmación borra el pedido sin aviso | 2 | 2 | 2 | 2 | **2** |
| H-04 | Motivo del bloqueo de «Confirmar» separado y pequeño | — | 2 | 3 | 2 | **2** |
| H-05 | Código de retiro no copiable ni con instrucción | 2 | 2 | 1 | 2 | **2** |
| H-06 | Contador del carrito sin unidad ni etiqueta | 1 | 1 | 1 | 1 | **1** |
| H-07 | Sin indicador de pasos del flujo | 1 | — | 1 | 1 | **1** |

**Cobertura:** Manolo y Ariel detectaron los 7 hallazgos heurísticos; Luis y Kevin, 6. Los cuatro coincidieron en H-01, H-02, H-03, H-05 y H-06.

Archivos: [`heuristica-consolidada.md`](resultados/heuristica-consolidada.md) · [`luis`](resultados/heuristica-luis.md) · [`kevin`](resultados/heuristica-kevin.md) · [`manolo`](resultados/heuristica-manolo.md) · [`ariel`](resultados/heuristica-ariel.md)

---

## 4. Método 2 — Prueba de usabilidad con usuarios (Fase 3.3)

Tres participantes externos, sesiones individuales con **pensamiento en voz alta**, consentimiento anonimizado y los cuatro roles del laboratorio (Moderador, Usuario, Cronometrista, Observador; soporte técnico para F5).

| Código | Edad | Carrera | Semestre | Consentimiento |
| :---: | :---: | :--- | :---: | :---: |
| P1 | 20 | Software | 5.º | Aceptado |
| P2 | 21 | Sistemas | 4.º | Aceptado |
| P3 | 22 | Software | 5.º | Aceptado |

Registros: [`P1.md`](resultados/P1.md) · [`P2.md`](resultados/P2.md) · [`P3.md`](resultados/P3.md)

---

## 5. Consolidación de métricas ISO 9241-11:2018 (Fase 3.4)

### 5.1 Eficacia

| Indicador | Resultado |
| :--- | :---: |
| Tasa de éxito autónomo | **96,3 %** (26/27) |
| Errores críticos | **0** |
| Errores no críticos | **3** |

### 5.2 Eficiencia

| Tarea | Meta (s) | Mediana (s) | Cumple |
| :--- | ---: | ---: | :---: |
| T1 | 60 | 6 | Sí |
| T2 | 60 | 13 | Sí |
| T3 | 60 | 19 | Sí |
| T4 | 90 | 17 | Sí |
| T5 | 60 | 8 | Sí |
| T6 | 90 | 15 | Sí |
| T7 | 60 | 13 | Sí |
| T8 | 90 | 18 | Sí |
| T9 | 60 | 9 | Sí |

### 5.3 Satisfacción (SUS)

| Participante | SUS |
| :--- | ---: |
| P1 | 90,0 |
| P2 | 77,5 |
| P3 | 92,5 |
| **Promedio** | **86,7** |

Referencia de la industria: **68,0** (Brooke, 1996). Los tres participantes la superan.

Detalle de cálculo y errores por tarea: [`resultados/metricas-iso.md`](resultados/metricas-iso.md).

---

## 6. Comparación Fase 2 (V1) → Fase 3 (V2)

| Indicador | Fase 2 | Fase 3 |
| :--- | :---: | :---: |
| Tasa de éxito autónomo | 94 % (17/18) | **96,3 % (26/27)** |
| T4 · Mediana | 24 s | **17 s** |
| T6 · Éxito | 2/3 | **3/3** |
| SUS promedio | 83,3 | **86,7** |
| Tareas / duración | 6 / 20 min | 9 / 30 min |

---

# Parte II — Fase 4: Consolidación y cierre

## 7. Matriz consolidada de hallazgos (Fase 4.1)

Regla: severidad = mediana de los cuatro evaluadores; los hallazgos que solo detectó un método se calificaron con su propia evidencia. La prioridad combina severidad, coincidencia de métodos e impacto en las métricas ISO.

| ID | Hallazgo | Heurística | Sev. | Prioridad | Criterio | Responsable |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| H-01 | Aviso «agregado» efímero y poco perceptible | H1 | 3 | **P1** | C-01 | Luis Miranda |
| H-02 | Búsqueda sin resultados no ofrece recuperación | H9 | 3 | **P1** | C-02 | Kevin Velasco |
| H-03 | Salir de la confirmación borra el pedido sin aviso | H3 | 2 | P2 | C-03 | Luis Miranda |
| H-04 | Motivo del bloqueo separado del botón | H5 | 2 | **P1** | C-04 | Manolo García |
| H-05 | Código de retiro no copiable ni con instrucción | H10 | 2 | P2 | C-05 | Ariel Cholota |
| H-06 | Contador del carrito sin unidad ni etiqueta | H1/H2 | 1 | P4 | C-06 | Ariel Cholota |
| H-07 | Sin indicador de pasos del flujo | H1 | 1 | P4 | C-07 | Ariel Cholota |
| H-08 | Tocar un ítem del pedido no abre el detalle | H4 | 2 | P3 | C-08 | Manolo García |
| H-09 | Los usuarios buscan el total desde el menú | H6 | 1 | P4 | C-09 | Kevin Velasco |

**Distribución:** 0 críticos · 2 mayores · 4 menores · 3 cosméticos.
**Propuesta de mejora y criterio de cierre de cada hallazgo:** [`docs/matriz-consolidada.md`](docs/matriz-consolidada.md).

---

## 8. Triangulación metodológica (Fase 4.2)

| Indicador | Resultado |
| :--- | :---: |
| Hallazgos totales | **9** |
| Detectados por la heurística | 7 / 9 (77,8 %) |
| Detectados por los usuarios | 5 / 9 (55,6 %) |
| Detectados por ambos | 3 / 9 (33,3 %) |

| Origen | Hallazgos |
| :--- | :--- |
| Ambos métodos | H-01, H-02, H-04 |
| Solo heurística | H-03, H-05, H-06, H-07 |
| Solo usuarios | H-08, H-09 |

La heurística detecta riesgos latentes que el recorrido feliz no dispara; los usuarios revelan expectativas que la inspección no puede anticipar. Los tres hallazgos comunes son también los de mayor prioridad, lo que respalda la P1 sin depender de una sola fuente.

Análisis completo y amenazas a la validez: [`docs/triangulacion.md`](docs/triangulacion.md).

---

## 9. Criterios técnicos verificables (Fase 4.3)

| ID | Criterio | Estándar de respaldo | Umbral |
| :---: | :--- | :--- | :--- |
| C-01 | El usuario percibe que el producto se agregó | ISO 9241-110 · WCAG 4.1.3, 1.4.3 | 3/3 sin mirar el contador · ≥ 5 s · contraste ≥ 4,5:1 |
| C-02 | Entiende la causa del vacío y puede salir | ISO 9241-110 · WCAG 3.3.1, 3.3.3 | 3/3 recuperan en ≤ 10 s sin pista |
| C-03 | Salir de la confirmación no destruye el pedido | ISO 9241-110 · WCAG 3.3.1 | 0 pérdidas silenciosas |
| C-04 | Comprende por qué no puede confirmar | WCAG 3.3.1, 3.3.3, 1.4.1 | 3/3 en ≤ 5 s · motivo adyacente |
| C-05 | Puede copiar el código y sabe para qué sirve | ISO 9241-110 · Nielsen H10 | Copia en 1 clic + instrucción |
| C-06 | El contador comunica cantidad y unidad | WCAG 4.1.2 | Nombre accesible con unidad · 3/3 |
| C-07 | Sabe en qué paso está | WCAG 2.4.8 · ISO 9241-110 | Indicador visible + `aria-current` |
| C-08 | El ítem del pedido abre su detalle | ISO 9241-110 · WCAG 3.2.4 | 0 controles muertos |
| C-09 | El total se ve sin abrir el pedido | ISO 9241-110 · Nielsen H6 | 3/3 lo leen desde el menú |

Tabla completa con el método de verificación: [`docs/criterios-tecnicos.md`](docs/criterios-tecnicos.md).

---

## 10. Backlog priorizado (Fase 4.4)

| Prioridad | Hallazgos | Esfuerzo | Iteración |
| :---: | :--- | ---: | :---: |
| **P1** | H-02, H-01, H-04 | 9 h | 1 |
| **P2** | H-03, H-05 | 5 h | 2 |
| **P3** | H-08 | 4 h | 2 |
| **P4** | H-06, H-07, H-09 | 4 h | 3 |

**Total:** 22 h. Cada Issue se cierra solo con el criterio cumplido, la regresión de las 9 tareas y la revisión de otro integrante.

Detalle, reparto de carga, riesgos y definición de terminado: [`docs/backlog.md`](docs/backlog.md).

---

## 11. Conclusiones (Fase 4.5)

**CaféU V2 es usable para completar el pedido y todavía no lo es para que el usuario entienda lo que ocurre mientras lo hace.**

- **Eficacia:** 96,3 % de éxito autónomo, sin errores críticos.
- **Eficiencia:** las 9 medianas bajo su meta; el mayor tiempo fue T8 (24 s en P2), asociado a H-02.
- **Satisfacción:** SUS 86,7, por encima de la referencia de 68,0.
- **Hallazgos:** 2 mayores, 4 menores y 3 cosméticos; ninguno impide completar una tarea.

Los números altos y los problemas reales conviven: las tareas se completan y, al mismo tiempo, el usuario no siempre entiende el estado del sistema. Esa diferencia entre *poder hacer* y *saber qué está pasando* es la que guía el backlog de la V3.

Texto completo con limitaciones y recomendaciones: [`docs/conclusiones.md`](docs/conclusiones.md).

---

## 12. GitHub: Issues, ramas y Pull Requests

Los 9 Issues están redactados y listos para crear en [`github/`](github/README.md):

| Archivo | Contenido |
| :--- | :--- |
| [`github/README.md`](github/README.md) | Índice, etiquetas, cómo crearlos, ramas, commits, plantilla de PR y matriz de revisión |
| [`github/issues/H-01.md`](github/issues/H-01.md) … [`H-09.md`](github/issues/H-09.md) | Cuerpo completo de cada Issue (contexto, evidencia, propuesta, criterio de aceptación) |

**Reparto:** Kevin (H-02, H-09) · Luis (H-01, H-03) · Manolo (H-04, H-08) · Ariel (H-05, H-06, H-07).

> Los Issues y PRs los crea cada integrante desde su cuenta: el contenido está listo, pero la autoría y la revisión deben quedar registradas en GitHub. `gh` no está instalado en el entorno del equipo, así que la vía recomendada es la web.

---

# Anexos

## 13. Capturas de evidencia

Las seis capturas del prototipo ya están en [`imagenes/`](imagenes/):

| Archivo | Contenido |
| :--- | :--- |
| `v2-aviso-agregado.png` | Toast verde tras agregar un producto |
| `v2-busqueda-tilde.png` | «cafe» sin tilde con el Café americano visible |
| `v2-busqueda-vacia.png` | Filtro «Comida» + «café» sin resultados |
| `v2-pedido-quitar.png` | Botón «🗑 Quitar» dentro de Mi pedido |
| `v2-confirmar-vacio.png` | Mi pedido vacío con «Confirmar» deshabilitado y su motivo |
| `v2-confirmacion.png` | Pantalla de confirmación con `#CU-104` |

Además: `uta.png` y `fisei.png` (logos, desde Overleaf) y `sesion-f3-p1/p2/p3.png` (evidencia de las sesiones).

---

## 14. Estructura de la entrega

```
ape6/Fase3-4/
├── README.md                     ← este documento
├── main.tex                      ← informe UTA (fases 3 y 4)
├── imagenes/                     ← capturas y logos
├── resultados/
│   ├── heuristica-luis.md · kevin · manolo · ariel
│   ├── heuristica-consolidada.md
│   ├── P1.md · P2.md · P3.md
│   └── metricas-iso.md
├── docs/
│   ├── ajustes-v2.md
│   ├── protocolo-fase3.md
│   ├── matriz-consolidada.md     ← Fase 4.1
│   ├── triangulacion.md          ← Fase 4.2
│   ├── criterios-tecnicos.md     ← Fase 4.3
│   ├── backlog.md                ← Fase 4.4
│   └── conclusiones.md           ← Fase 4.5
└── github/
    ├── README.md
    └── issues/H-01.md … H-09.md
```

---

## 15. Cómo reproducir la evaluación

1. Abrir `ape6/prototipo/index.html` en Chrome (modo móvil opcional).
2. Ejecutar F5 y verificar el estado inicial.
3. Aplicar el protocolo de `docs/protocolo-fase3.md` con cada participante.
4. Registrar tiempos y errores en la hoja de observación.
5. Aplicar el SUS al finalizar.
6. Recalcular las métricas con las fórmulas de `resultados/metricas-iso.md`.
7. Consolidar con la mediana y triangular con `docs/triangulacion.md`.

---

## 16. Referencias

- Boehm, B. (1984). *Software Engineering Economics*. Prentice Hall.
- Brooke, J. (1996). *SUS: A quick and dirty usability scale*. En *Usability Evaluation in Industry*.
- ISO. (2018). *ISO 9241-11:2018 — Ergonomics of human-system interaction. Part 11: Usability: Definitions and concepts*.
- ISO. (2020). *ISO 9241-110:2020 — Ergonomics of human-system interaction. Part 110: Dialogue principles*.
- Nielsen, J. (1994). *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group.
- Nielsen, J. (1995). *Severity Ratings for Usability Problems*. Nielsen Norman Group.
- W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*.

---

## 17. Informe LaTeX

El informe está en [`main.tex`](main.tex), con el mismo formato institucional UTA de la Fase 2, e incluye las fases 3 y 4. Para compilarlo:

1. Subir `main.tex` y la carpeta `imagenes/` a Overleaf (o hacer **Copy Project** del proyecto de la Fase 2, que ya tiene los logos).
2. Verificar que estén las capturas listadas en [`imagenes/README.md`](imagenes/README.md).
3. Compilar con pdfLaTeX.
