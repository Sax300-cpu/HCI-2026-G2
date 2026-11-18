# Evaluación heurística individual — Manolo García

**Rol en el laboratorio:** Observador
**Prototipo:** CaféU **V2** · **Fecha:** 18/11/2026
**Método:** inspección individual con las 10 heurísticas de Nielsen (1994).
**Severidad:** 1 = Cosmético · 2 = Menor · 3 = Mayor · 4 = Crítico.
`S = redondeo((F + I + P) / 3)`, con Frecuencia (F), Impacto (I) y Persistencia (P) de 1 a 4 (Nielsen, 1995).

---

## Hallazgos

| ID | Heurística | Problema observado | F | I | P | S |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **H-01** | H1 · Visibilidad del estado | El aviso de «agregado» es transitorio y de bajo contraste contra el fondo claro; se pierde si el usuario mira el catálogo. | 4 | 4 | 4 | **4** |
| **H-02** | H9 · Recuperación de errores | La búsqueda sin resultados no explica la causa (filtro activo) ni ofrece una acción de salida. | 3 | 3 | 2 | **3** |
| **H-03** | H3 · Control y libertad | Salir de la confirmación borra el pedido sin confirmación previa. | 2 | 3 | 2 | **2** |
| **H-04** | H5 · Prevención de errores | El motivo del bloqueo de «Confirmar» está debajo del botón; en móvil queda fuera del primer vistazo. | 2 | 3 | 3 | **3** |
| **H-05** | H10 · Ayuda y documentación | El código de retiro no es copiable ni se explica su uso. | 1 | 2 | 1 | **1** |
| **H-06** | H1 / H2 · Estado y lenguaje | El contador del carrito muestra un número sin unidad («3» en lugar de «3 productos»). | 2 | 1 | 1 | **1** |
| **H-07** | H1 · Visibilidad del estado | Falta un indicador de pasos del flujo de pedido. | 1 | 2 | 1 | **1** |

## Heurísticas sin hallazgos

- **H2:** el lenguaje es cotidiano y los productos se reconocen.
- **H4:** la iconografía y los botones son consistentes.
- **H6:** no hay información que el usuario deba memorizar entre pantallas.
- **H7:** filtros y búsqueda normalizada agilizan la tarea.
- **H8:** el diseño es minimalista y legible.

## Conclusión individual

El hallazgo más grave es **H-01**: el aviso existe, pero no cumple su función de informar. Le siguen **H-02** y **H-04**, ambos relacionados con la prevención y la recuperación. Son fallas de comunicación del estado, no de funcionamiento.
