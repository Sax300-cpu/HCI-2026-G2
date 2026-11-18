# APE 6 — Fase 3: Aplicación y análisis

**UNIVERSIDAD TÉCNICA DE AMBATO — FISEI — CARRERA DE SOFTWARE**
**Asignatura:** Interacción Humano-Computador · **Ciclo:** Julio – Diciembre 2026
**Prototipo:** CaféU **V2** (aplicación web móvil de pedidos de cafetería)
**Integrantes:** Luis Miranda · Kevin Velasco · Manolo García · Ariel Cholota

> **Estado:** Fase 3 completa (3.1 a 3.4). La Fase 4 (matriz consolidada, triangulación, criterios técnicos, backlog e Issues) se incorporará en la siguiente iteración.

---

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

## 7. Hallazgos detectados (insumo para la Fase 4)

| ID | Hallazgo | Sev. | Evidencia | Origen |
| :---: | :--- | :---: | :--- | :--- |
| H-01 | Aviso «agregado» efímero y poco perceptible | 3 | Heurística 4/4 · P2 y P3 no lo notaron | Ambos |
| H-02 | Búsqueda sin resultados no ofrece recuperación | 3 | Heurística 4/4 · P2 tardó 24 s en T8 | Ambos |
| H-03 | Salir de la confirmación borra el pedido sin aviso | 2 | Heurística 4/4 · no observado en usuarios | Solo heurística |
| H-04 | Motivo del bloqueo de «Confirmar» separado y pequeño | 2 | Heurística 3/4 · P2 necesitó la pista en T9 | Ambos |
| H-05 | Código de retiro no copiable ni con instrucción | 2 | Heurística 4/4 · ningún usuario lo intentó | Solo heurística |
| H-06 | Contador del carrito sin unidad ni etiqueta | 1 | Heurística 4/4 | Solo heurística |
| H-07 | Sin indicador de pasos del flujo | 1 | Heurística 3/4 | Solo heurística |
| H-08 | Tocar un ítem del pedido no abre el detalle | 2 | P1 y P2 lo intentaron | Solo usuarios |
| H-09 | Los usuarios buscan el total desde el menú | 1 | P3 lo comentó | Solo usuarios |

> La triangulación formal, la matriz consolidada, los criterios técnicos (C-01…) y el backlog priorizado (P1–P4) corresponden a la **Fase 4** y se agregarán en la siguiente iteración.

---

## 8. Capturas de evidencia

Guardar en `ape6/Fase3-4/imagenes/` con estos nombres:

| Archivo | Qué capturar |
| :--- | :--- |
| `uta.png` · `fisei.png` | Logos institucionales (reutilizar) |
| `v2-aviso-agregado.png` | Toast verde tras agregar un producto |
| `v2-busqueda-tilde.png` | Búsqueda «cafe» (sin tilde) con el Café americano visible |
| `v2-busqueda-vacia.png` | Filtro «Comida» + búsqueda «café» sin resultados |
| `v2-pedido-quitar.png` | Botón «🗑 Quitar» dentro de Mi pedido |
| `v2-confirmar-vacio.png` | Mi pedido vacío con «Confirmar pedido» deshabilitado y su motivo |
| `v2-confirmacion.png` | Pantalla de confirmación con el código `#CU-104` |
| `sesion-f3-p1.png` · `p2` · `p3` | Evidencias anonimizadas de las sesiones |

---

## 9. Estructura de la fase

```
ape6/Fase3-4/
├── README.md                  ← este documento
├── resultados/
│   ├── heuristica-luis.md
│   ├── heuristica-kevin.md
│   ├── heuristica-manolo.md
│   ├── heuristica-ariel.md
│   ├── heuristica-consolidada.md
│   ├── P1.md · P2.md · P3.md
│   └── metricas-iso.md
└── docs/
    ├── ajustes-v2.md
    └── protocolo-fase3.md
```

---

## 10. Cómo reproducir la evaluación

1. Abrir `ape6/prototipo/index.html` en Chrome (modo móvil opcional).
2. Ejecutar F5 y verificar el estado inicial.
3. Aplicar el protocolo de `docs/protocolo-fase3.md` con cada participante.
4. Registrar tiempos y errores en la hoja de observación.
5. Aplicar el SUS al finalizar.
6. Recalcular las métricas con las fórmulas de `resultados/metricas-iso.md`.

---

## 11. Referencias

- Boehm, B. (1984). *Software Engineering Economics*. Prentice Hall.
- Brooke, J. (1996). *SUS: A quick and dirty usability scale*. En *Usability Evaluation in Industry*.
- ISO. (2018). *ISO 9241-11:2018 — Ergonomics of human-system interaction. Part 11: Usability: Definitions and concepts*.
- Nielsen, J. (1994). *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group.
- Nielsen, J. (1995). *Severity Ratings for Usability Problems*. Nielsen Norman Group.
- W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*.

---

## 12. Informe LaTeX

El informe de la Fase 3 está en [`main.tex`](main.tex), con el mismo formato institucional UTA de la Fase 2. Para compilarlo:

1. Subir `main.tex` y la carpeta `imagenes/` a Overleaf.
2. Agregar las capturas listadas en [`imagenes/README.md`](imagenes/README.md).
3. Compilar con pdfLaTeX.

---

## 13. Pendiente para la Fase 4

- Matriz consolidada definitiva (H-01…H-09) con propuesta de mejora.
- Triangulación metodológica (ambos métodos / solo heurística / solo usuarios).
- Criterios técnicos verificables (C-01…C-09) con estándar de respaldo.
- Backlog priorizado (P1–P4) y GitHub Issues trazables.
- `docs/conclusiones.md` con la respuesta a la pregunta del laboratorio.
- Ampliar `main.tex` con la Fase 4 y generar el PDF final.
