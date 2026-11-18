# Métricas ISO 9241-11 — Fase 3 (prototipo CaféU V2)

**Universidad Técnica de Ambato — FISEI — Carrera de Software**
**Asignatura:** Interacción Humano-Computador · **APE 6 — Fase 3: Aplicación y análisis**
**Prototipo evaluado:** CaféU **V2** (ajustes post-pilotaje)
**Sesiones:** 18/11/2026 · **Participantes:** P1, P2 y P3 (externos, anonimizados)

---

## 1. Registro por tarea y participante

Metas tomadas del protocolo de la Fase 3 (`docs/protocolo-fase3.md`).
`*` = completó después de la pista única (no cuenta como éxito autónomo).

| Tarea | Meta | P1 (s) | P2 (s) | P3 (s) | Éxito autónomo | Mediana (s) | Err. críticos | Err. no críticos |
| :--- | ---: | ---: | ---: | ---: | :---: | ---: | :---: | :---: |
| T1 · Horario | 60 | 5 | 7 | 6 | 3/3 | 6 | 0 | 0 |
| T2 · Agregar sánduche | 60 | 12 | 14 | 13 | 3/3 | 13 | 0 | 0 |
| T3 · Agregar dos cafés | 60 | 19 | 21 | 18 | 3/3 | 19 | 0 | 1 |
| T4 · Quitar y confirmar | 90 | 16 | 19 | 17 | 3/3 | 17 | 0 | 1 |
| T5 · Productos de comida | 60 | 7 | 9 | 8 | 3/3 | 8 | 0 | 0 |
| T6 · Precio de 3 croissants | 90 | 14 | 17 | 15 | 3/3 | 15 | 0 | 0 |
| T7 · Buscar «cafe» sin tilde | 60 | 12 | 14 | 13 | 3/3 | 13 | 0 | 0 |
| T8 · Filtro + búsqueda sin salida | 90 | 15 | 24 | 18 | 3/3 | 18 | 0 | 1 |
| T9 · Confirmar pedido vacío | 60 | 8 | 13* | 9 | 2/3 | 9 | 0 | 0 |
| **Total** | — | — | — | — | **26/27** | — | **0** | **3** |

---

## 2. Eficacia

| Indicador | Cálculo | Resultado |
| :--- | :--- | :--- |
| Tasa de éxito autónomo | (26 / 27) × 100 | **96,3 %** |
| Tareas con éxito autónomo | 26 de 27 ejecuciones | **96,3 %** |
| Errores críticos | Tareas abandonadas o no completadas | **0** |
| Errores no críticos | Recuperaciones dentro de la tarea | **3** |

**Errores no críticos registrados:**

1. **P2 · T3:** agregó un café en lugar de dos y corrigió con el botón `+` (recuperación autónoma).
2. **P2 · T8:** mantuvo el filtro «Comida» activo y siguió buscando «café»; después de ~12 s limpió el filtro (recuperación autónoma).
3. **P3 · T4:** pulsó «Quitar» sobre el café por error y lo volvió a agregar antes de quitar el sánduche (recuperación autónoma).

> Ningún participante abandonó una tarea ni superó el tiempo máximo. La única ejecución que requirió la pista única fue **P2 · T9**, porque el botón «Confirmar pedido» estaba deshabilitado y el motivo no era evidente a primera vista (ver hallazgo H-04).

---

## 3. Eficiencia

| Tarea | Meta (s) | Mediana (s) | Diferencia | Cumple |
| :--- | ---: | ---: | ---: | :---: |
| T1 · Horario | 60 | 6 | −54 | Sí |
| T2 · Agregar sánduche | 60 | 13 | −47 | Sí |
| T3 · Agregar dos cafés | 60 | 19 | −41 | Sí |
| T4 · Quitar y confirmar | 90 | 17 | −73 | Sí |
| T5 · Productos de comida | 60 | 8 | −52 | Sí |
| T6 · Precio de 3 croissants | 90 | 15 | −75 | Sí |
| T7 · Buscar «cafe» sin tilde | 60 | 13 | −47 | Sí |
| T8 · Filtro + búsqueda sin salida | 90 | 18 | −72 | Sí |
| T9 · Confirmar pedido vacío | 60 | 9 | −51 | Sí |

**Resultado:** las 9 tareas quedaron por debajo de su meta. La tarea más lenta fue **T8** (18 s de mediana), precisamente la que expone el problema de recuperación de la búsqueda (H-02).

---

## 4. Satisfacción (SUS)

Escala 0–100. Referencia de la industria: **68,0** (Brooke, 1996).

### Respuestas por ítem

| N° | Ítem (resumido) | P1 | P2 | P3 |
| :---: | :--- | :---: | :---: | :---: |
| 1 | Me gustaría usar este sistema con frecuencia | 4 | 4 | 4 |
| 2 | Encontré el sistema innecesariamente complejo | 1 | 1 | 1 |
| 3 | Pensé que el sistema era fácil de usar | 5 | 4 | 5 |
| 4 | Necesitaría el apoyo de un técnico | 1 | 1 | 1 |
| 5 | Las funciones estaban bien integradas | 4 | 4 | 4 |
| 6 | Había demasiada inconsistencia | 1 | 2 | 1 |
| 7 | La mayoría aprendería a usarlo rápidamente | 5 | 4 | 5 |
| 8 | Encontré el sistema muy engorroso | 2 | 2 | 1 |
| 9 | Me sentí muy seguro usando el sistema | 4 | 3 | 4 |
| 10 | Necesité aprender muchas cosas antes | 1 | 2 | 1 |

### Puntajes

| Participante | Impares (Σ v−1) | Pares (Σ 5−v) | Total | SUS |
| :--- | ---: | ---: | ---: | ---: |
| P1 | 17 | 19 | 36 | **90,0** |
| P2 | 14 | 17 | 31 | **77,5** |
| P3 | 17 | 20 | 37 | **92,5** |
| **Promedio** | — | — | — | **86,7** |

- Los tres participantes superan la referencia de **68,0**.
- El puntaje más bajo (P2, 77,5) coincide con quien reportó no haber visto el aviso de «agregado» y haber necesitado ayuda en T9.

---

## 5. Comparación Fase 2 (V1) → Fase 3 (V2)

| Indicador | Fase 2 (V1) | Fase 3 (V2) | Lectura |
| :--- | :---: | :---: | :--- |
| Tasa de éxito autónomo | 94 % (17/18) | **96,3 % (26/27)** | Se mantiene alta con tres tareas nuevas |
| T4 · Mediana | 24 s | **17 s** | El botón «Quitar» redujo la duda de localización |
| T4 · Errores no críticos | 1 | 1 | Se mantiene una recuperación, pero ya no por el icono |
| T6 · Éxito | 2/3 | **3/3** | La consigna reformulada eliminó la ambigüedad |
| SUS promedio | 83,3 | **86,7** | Ligera mejora |
| Sesión | 20 min | 30 min | Incluye 3 tareas de refuerzo |

---

## 6. Fórmulas aplicadas

- **Éxito autónomo:** `(Σ «Sí» / (participantes × tareas)) × 100`. «Con ayuda» y «No» no cuentan como éxito.
- **Mediana de tiempo:** valor central de los tres tiempos de cada tarea, en segundos.
- **SUS:** `(Σ ítems impares (v − 1) + Σ ítems pares (5 − v)) × 2,5`.
- **Errores críticos:** impiden terminar la tarea. **No críticos:** el participante se recupera sin ayuda.

---

## 7. Evidencia

- Registros individuales: [`P1.md`](P1.md) · [`P2.md`](P2.md) · [`P3.md`](P3.md)
- Evaluaciones heurísticas: [`heuristica-consolidada.md`](heuristica-consolidada.md)
- Capturas de las sesiones: `sesion-f3-p1.png`, `sesion-f3-p2.png`, `sesion-f3-p3.png`
