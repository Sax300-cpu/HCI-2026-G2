# Conclusiones — CaféU (Confirmación de pedido)

## Requisito
Confirmar un pedido desde el teléfono (320–360 px) y desde escritorio (768–1366 px)
sin desborde horizontal y sin envíos duplicados.

## Decisión
Interfaz Mobile-First: una columna en móvil y dos columnas con `@media (min-width: 48rem)`;
botón nativo con `min-height: 44px`, `:focus-visible`, y bloqueo de doble envío con
`disabled` más gestión explícita del foco con `.focus()`.

## Dato observado
- `scrollWidth <= innerWidth` en 320, 360, 768 y 1366 px (0 desborde horizontal).
- Observación: tareas completadas en 18 s y 25 s, sin errores de navegación (1 solicitud de ayuda puntual).

## Limitación
La validación se realizó en un navegador (Chrome/DevTools) y con pocos
participantes; no se probó con lectores de pantalla reales ni en múltiples
navegadores.

## Siguiente iteración
Probar con lectores de pantalla (NVDA/VoiceOver), ampliar la muestra de usuarios,
y persistir el estado del pedido (pendiente/confirmado) con `localStorage`.
