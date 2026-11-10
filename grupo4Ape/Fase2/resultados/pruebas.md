# Pruebas técnicas en navegador — CaféU (Confirmación de pedido)

Medición de desborde horizontal en la versión integrada (`src/index.html`),
con DevTools al **100 % de zoom**. Criterio: `scrollWidth <= innerWidth` (sin desborde).

## Resultados

| Viewport (px) | innerWidth | scrollWidth | ¿Desborde? | Captura |
|---|---|---|---|---|
| 320 × 720 | 320 | 320 | No | `evidencias/320x720.png` |
| 360 × 800 | 360 | 360 | No | `evidencias/360x800.png` |
| 768 × 1024 | 768 | 768 | No | `evidencias/768x1024.png` |
| 1366 × 768 | 1366 | 1366 | No | `evidencias/1366x768.png` |

## Cómo medir

```js
// En la consola de DevTools:
console.log({
  innerWidth: window.innerWidth,
  scrollWidth: document.documentElement.scrollWidth,
  sinDesborde: document.documentElement.scrollWidth <= window.innerWidth
});
```

## Conclusión técnica

En las cuatro resoluciones la interfaz **no genera desborde horizontal**
(`scrollWidth <= innerWidth`), lo que confirma que el enfoque Mobile-First y el
cambio a dos columnas en `@media (min-width: 48rem)` no rompen el layout.
