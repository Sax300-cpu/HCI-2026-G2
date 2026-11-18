# Evaluación heurística individual — Ariel Cholota

**Rol en el laboratorio:** Soporte técnico y reinicio de estado (F5)
**Prototipo:** CaféU **V2** · **Fecha:** 18/11/2026
**Método:** inspección individual con las 10 heurísticas de Nielsen (1994).
**Severidad:** 1 = Cosmético · 2 = Menor · 3 = Mayor · 4 = Crítico.
`S = redondeo((F + I + P) / 3)`, con Frecuencia (F), Impacto (I) y Persistencia (P) de 1 a 4 (Nielsen, 1995).

---

## Hallazgos

| ID | Heurística | Problema observado | F | I | P | S |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **H-01** | H1 · Visibilidad del estado | El aviso de «agregado» permanece 5 s, pero no se anuncia como región viva en todos los navegadores ni queda asociado al producto. | 3 | 3 | 2 | **3** |
| **H-02** | H9 · Recuperación de errores | Sin resultados, el catálogo queda vacío y el filtro activo sigue sin explicarse. | 2 | 4 | 3 | **3** |
| **H-03** | H3 · Control y libertad | Abandonar la confirmación elimina el pedido sin confirmación. | 2 | 2 | 2 | **2** |
| **H-04** | H5 · Prevención de errores | El texto que explica el bloqueo de «Confirmar» está separado del botón y en tamaño reducido. | 2 | 2 | 1 | **2** |
| **H-05** | H10 · Ayuda y documentación | El código de retiro no se puede copiar ni tiene instrucción de uso. | 2 | 2 | 2 | **2** |
| **H-06** | H1 · Visibilidad del estado | El contador del carrito no tiene etiqueta accesible que indique qué representa. | 1 | 1 | 1 | **1** |
| **H-07** | H1 · Visibilidad del estado | No hay indicador del paso actual dentro del flujo. | 1 | 1 | 1 | **1** |

## Heurísticas sin hallazgos

- **H2:** terminología y precios coherentes con el catálogo.
- **H4:** estilos y controles homogéneos.
- **H6:** el resumen del pedido evita memorizar ítems.
- **H7:** la búsqueda sin tildes funciona y el filtro es rápido.
- **H8:** sin ruido visual.

## Conclusión individual

Como responsable del reinicio, confirmé que **F5 restablece el estado completo** (carrito, búsqueda, filtro y vista). Los hallazgos son de retroalimentación y recuperación: el sistema hace lo correcto, pero no siempre lo comunica.
