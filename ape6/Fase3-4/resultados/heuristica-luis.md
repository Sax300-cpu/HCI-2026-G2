# Evaluación heurística individual — Luis Miranda

**Rol en el laboratorio:** Moderador
**Prototipo:** CaféU **V2** · **Fecha:** 18/11/2026
**Método:** inspección individual con las 10 heurísticas de Nielsen (1994).
**Severidad:** 1 = Cosmético · 2 = Menor · 3 = Mayor · 4 = Crítico.
`S = redondeo((F + I + P) / 3)`, con Frecuencia (F), Impacto (I) y Persistencia (P) de 1 a 4 (Nielsen, 1995).

---

## Hallazgos

| ID | Heurística | Problema observado | F | I | P | S |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **H-01** | H1 · Visibilidad del estado | El aviso «agregado al pedido» aparece arriba y desaparece a los 5 s; si el usuario ya empezó a desplazarse, pasa desapercibido. | 4 | 3 | 3 | **3** |
| **H-02** | H9 · Recuperación de errores | Cuando la búsqueda no devuelve resultados solo dice «No hay productos que coincidan»; no sugiere limpiar el filtro ni cambiar de categoría. | 3 | 4 | 3 | **3** |
| **H-03** | H3 · Control y libertad | En la confirmación, «Volver al menú» vacía el pedido sin pedir confirmación; el código se pierde si el usuario no lo anotó. | 2 | 3 | 2 | **2** |
| **H-05** | H10 · Ayuda y documentación | El código `#CU-104` no se puede copiar y no indica qué hacer con él (¿mostrarlo en caja?). | 2 | 2 | 2 | **2** |
| **H-06** | H1 · Visibilidad del estado | El contador del carrito muestra «3» sin unidad ni etiqueta; no distingue productos de unidades. | 1 | 2 | 1 | **1** |
| **H-07** | H1 · Visibilidad del estado | No hay indicador de pasos (menú → pedido → confirmación); el usuario no sabe cuánto falta. | 1 | 2 | 1 | **1** |

## Heurísticas sin hallazgos

- **H2:** el vocabulario corresponde al dominio de la cafetería.
- **H4:** los botones mantienen el mismo patrón; el botón «Quitar» ya es consistente.
- **H5:** el selector de cantidad no baja de 1 y la confirmación vacía está bloqueada.
- **H7:** el buscador normaliza tildes y los filtros funcionan.
- **H8:** la interfaz es sobria, sin elementos decorativos innecesarios.

## Conclusión individual

Los problemas con mayor severidad son la **visibilidad del aviso** (H-01) y la **falta de salida en la búsqueda sin resultados** (H-02). Ambos afectan la comprensión del estado, no la posibilidad de completar la tarea: por eso el prototipo puede verse «funcional» y aun así generar dudas.
