# Evaluación heurística individual — Kevin Velasco

**Rol en el laboratorio:** Registro de métricas y cronometraje
**Prototipo:** CaféU **V2** · **Fecha:** 18/11/2026
**Método:** inspección individual con las 10 heurísticas de Nielsen (1994).
**Severidad:** 1 = Cosmético · 2 = Menor · 3 = Mayor · 4 = Crítico.
`S = redondeo((F + I + P) / 3)`, con Frecuencia (F), Impacto (I) y Persistencia (P) de 1 a 4 (Nielsen, 1995).

---

## Hallazgos

| ID | Heurística | Problema observado | F | I | P | S |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **H-01** | H1 · Visibilidad del estado | El aviso de «agregado» compite con el cambio de pantalla; el usuario ya está mirando el catálogo cuando aparece. | 3 | 4 | 3 | **3** |
| **H-02** | H9 · Recuperación de errores | El estado vacío de la búsqueda no ofrece ninguna acción; el usuario queda sin pista sobre el filtro activo. | 2 | 4 | 3 | **3** |
| **H-03** | H3 · Control y libertad | «Volver al menú» desde la confirmación descarta el pedido sin advertencia. | 2 | 3 | 1 | **2** |
| **H-04** | H5 / H9 · Prevención y diagnóstico | El botón «Confirmar pedido» deshabilitado explica el motivo en un texto pequeño y separado del botón. | 2 | 2 | 2 | **2** |
| **H-05** | H10 · Ayuda y documentación | No hay acción para copiar el código ni instrucción de uso en la cafetería. | 2 | 3 | 2 | **2** |
| **H-06** | H1 · Visibilidad del estado | El contador del carrito no tiene etiqueta textual que aclare qué cuenta. | 1 | 2 | 1 | **1** |

## Heurísticas sin hallazgos

- **H2:** nombres y precios coinciden con el catálogo real.
- **H4:** patrones de botones y navegación consistentes.
- **H5 (cantidades):** el mínimo de 1 y el bloqueo de confirmación vacía funcionan.
- **H7:** filtros y búsqueda sin tildes responden bien.
- **H8:** jerarquía visual clara.

## Conclusión individual

El prototipo **V2** corrigió los problemas de la Fase 2 (botón «Quitar» y búsqueda con tildes), pero quedan dos fallas de estado: el aviso que no se percibe y la búsqueda que no ofrece recuperación. En T9, el bloqueo funciona, aunque el motivo está mal ubicado.
