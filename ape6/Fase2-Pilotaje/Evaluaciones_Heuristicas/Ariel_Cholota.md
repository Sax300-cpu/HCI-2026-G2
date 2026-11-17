# Evaluación Heurística Individual — Ariel Cholota (Soporte técnico)

Prototipo evaluado: **CaféU** · Método: 10 heurísticas de Nielsen · Fecha: `__ / __ / 2026`

| H | Heurística | Cumple | Observación |
|---|---|---|---|
| H1 | Visibilidad del estado del sistema | Sí | El código `#CU-104` y el total son claros; el aviso de agregado es breve. |
| H2 | Relación con el mundo real | Sí | Términos e íconos del dominio de cafetería. |
| H3 | Control y libertad del usuario | Sí | Salidas claras y opción de revertir. |
| H4 | Consistencia y estándares | Parcial | El símbolo «✕» para quitar no sigue el estándar de botones con etiqueta. |
| H5 | Prevención de errores | Sí | Mínimo de 1 unidad y confirmación sin doble envío. |
| H6 | Reconocer antes que recordar | **No** | Quitar requiere recordar el significado del símbolo. |
| H7 | Flexibilidad y eficiencia | Sí | Filtros eficientes; el buscador no normaliza tildes. |
| H8 | Diseño estético y minimalista | Sí | Visual limpio y consistente. |
| H9 | Ayudar a reconocer/diagnosticar errores | Parcial | Empty state útil; falta mensaje para «sin resultados». |
| H10 | Ayuda y documentación | No aplica | Prototipo autocontenido. |

**Conclusión individual:** refuerzo los hallazgos H6 y H7. Como soporte, confirmo que el reinicio por recarga restablece correctamente el estado inicial.
