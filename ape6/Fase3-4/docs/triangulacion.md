# Triangulación metodológica — CaféU V2

**APE 6 — Fase 4.2 · Contraste de los dos métodos**
**Método analítico:** inspección heurística individual (4 evaluadores, 10 heurísticas de Nielsen).
**Método empírico:** prueba Think-Aloud con 3 participantes externos y 9 tareas.

---

## 1. Matriz de convergencia

| ID | Hallazgo | Heurística | Usuarios | Coincidencia |
| :---: | :--- | :---: | :---: | :--- |
| H-01 | Aviso «agregado» efímero y poco perceptible | ✓ | ✓ | **Ambos** |
| H-02 | Búsqueda sin resultados sin recuperación | ✓ | ✓ | **Ambos** |
| H-03 | Salir de la confirmación borra el pedido | ✓ | — | Solo heurística |
| H-04 | Motivo del bloqueo separado del botón | ✓ | ✓ | **Ambos** |
| H-05 | Código de retiro no copiable | ✓ | — | Solo heurística |
| H-06 | Contador sin unidad ni etiqueta | ✓ | — | Solo heurística |
| H-07 | Sin indicador de pasos del flujo | ✓ | — | Solo heurística |
| H-08 | El ítem del pedido no abre el detalle | — | ✓ | Solo usuarios |
| H-09 | El total se busca desde el menú | — | ✓ | Solo usuarios |

`✓` = el método detectó el hallazgo con evidencia registrada.

---

## 2. Indicadores de cobertura

| Indicador | Cálculo | Resultado |
| :--- | :--- | :---: |
| Hallazgos totales (unión) | H-01…H-09 | **9** |
| Detectados por la heurística | 7 / 9 | **77,8 %** |
| Detectados por los usuarios | 5 / 9 | **55,6 %** |
| Detectados por ambos | 3 / 9 | **33,3 %** |
| Exclusivos de la heurística | 4 | **44,4 %** |
| Exclusivos de los usuarios | 2 | **22,2 %** |

**Índice de Jaccard** (solapamiento entre métodos): `3 / 9 = 0,33`. Un tercio de los hallazgos es común; el resto es complementario, no redundante.

---

## 3. Qué detecta cada método

### 3.1 La heurística encuentra lo latente

Los cuatro hallazgos exclusivos comparten un patrón: **no se disparan con el recorrido feliz de las nueve tareas**.

| Hallazgo | Por qué no apareció en las sesiones |
| :--- | :--- |
| H-03 | Ningún participante abandonó la confirmación: todos pulsaron «Volver al menú» al terminar. |
| H-05 | Nadie intentó copiar el código porque el prototipo no lo permite; no se prueba lo que no existe. |
| H-06 | El contador numérico fue suficiente para P1 y P2; el problema es de accesibilidad, no de tarea. |
| H-07 | Con solo cinco pantallas y tareas cortas, el usuario no necesita saber «cuánto falta». |

**Conclusión parcial:** la inspección cubre el **espacio de problemas**, no solo el camino observado. Su límite es que puede reportar riesgos que el contexto de uso real nunca active.

### 3.2 Los usuarios revelan expectativas

| Hallazgo | Evidencia | Qué aporta |
| :--- | :--- | :--- |
| H-08 | P1 y P2 tocaron la línea del pedido esperando editarla | Las tarjetas del menú son tocables; las del pedido no. La **consistencia** solo se nota al usar. |
| H-09 | P3 quiso ver el total sin salir del menú | El flujo impone un paso que el usuario no esperaba dar. |

Ambos son **problemas de conformidad con las expectativas**, el principio de ISO 9241-110 que la inspección no puede evaluar sin conocer la costumbre del usuario.

### 3.3 La convergencia valida la prioridad

Los tres hallazgos comunes (**H-01, H-02, H-04**) son también los de mayor severidad o mayor impacto medido:

| Hallazgo | Severidad | Evidencia empírica |
| :---: | :---: | :--- |
| H-01 | 3 | 2 de 3 participantes no percibieron el aviso; P2 obtuvo el SUS más bajo (77,5). |
| H-02 | 3 | P2 tardó 24 s en T8, el mayor tiempo de toda la evaluación. |
| H-04 | 2 | La única pista de la fase se leyó en T9 (P2). |

Que un problema sea detectado por dos métodos independientes y además deje huella en las métricas es la señal más fuerte para priorizar.

---

## 4. Contraste con las métricas ISO

| Métrica | Resultado | Hallazgo asociado |
| :--- | :---: | :--- |
| Éxito autónomo | 96,3 % (26/27) | H-04 explica el único «con ayuda» (P2 · T9). |
| Errores críticos | 0 | Confirma que ningún hallazgo impide completar una tarea. |
| Errores no críticos | 3 | H-02 (T8) y la recuperación de cantidad en T3. |
| Mediana máxima | 19 s (T3) · 18 s (T8) | H-02 concentra el tiempo perdido en recuperación. |
| SUS promedio | 86,7 | H-01 explica la diferencia entre P2 (77,5) y P3 (92,5). |

**Lectura:** las métricas dicen *cuánto* cuesta el problema; los métodos dicen *por qué* ocurre. Ninguna de las dos fuentes, por separado, permite afirmar que el prototipo es usable.

---

## 5. Amenazas a la validez

| Amenaza | Efecto | Mitigación aplicada |
| :--- | :--- | :--- |
| Muestra pequeña (3 participantes) | Un hallazgo de un solo usuario puede ser idiosincrásico. | Se reporta la frecuencia (cuántos participantes) y se contrasta con la inspección. |
| Una sola sesión por participante | No se mide aprendizaje ni uso repetido. | Se declara como limitación; se recomienda una segunda ronda tras la corrección. |
| Tareas guiadas | El recorrido feliz oculta problemas de exploración libre. | La inspección cubre ese hueco con H-03, H-05, H-06 y H-07. |
| Evaluadores del mismo equipo | Sesgo de familiaridad con el diseño. | Inspección individual sin cruzar listas; severidad por mediana de cuatro. |
| Un solo dispositivo y navegador | No se evalúa respuesta adaptativa ni otros motores. | Se documenta el entorno (Chrome, viewport 390 × 844). |

---

## 6. Conclusión de la triangulación

1. Los métodos **no son intercambiables**: la heurística aporta el 44,4 % de los hallazgos y los usuarios el 22,2 %, con solo un tercio en común.
2. La **coincidencia en H-01, H-02 y H-04** es la base objetiva de la prioridad P1: no depende del criterio de un evaluador ni de la impresión de un participante.
3. Los hallazgos exclusivos de usuarios obligan a **ampliar el alcance**: no basta con corregir errores; hay que alinear el prototipo con lo que el usuario espera de una app de pedidos.
4. La triangulación permite responder la pregunta de evaluación con evidencia de **desempeño** (ISO 9241-11) y de **causa** (heurísticas + think-aloud), que es exactamente lo que el APE 6 solicita.
