
=
      DOCUMENTACIÓN DE ESTADOS Y MICROINTERACCIONES - CAFÉU


En este apartado se detallan los estados de interfaz, mecánicas de retroalimentación (feedback) y microinteracciones implementadas para la optimización de la experiencia de usuario (UX) en la plataforma CaféU.

----------------------------------------------------------------------
1. ESTADO DE FOCO Y SELECCIÓN (Focus / Active State)
----------------------------------------------------------------------
- Captura de referencia: 01_estado_focus_busqueda.png
- Descripción: Al hacer clic o interactuar con la barra de entrada de texto "Buscar productos...", la interfaz aplica un contorno (stroke) destacado en color rojo institucional.
- Justificación HCI: Proporciona retroalimentación visual inmediata (Ley de Fitts / Heurística de Visibilidad del Estado del Sistema), indicando de forma explícita al usuario en qué componente se encuentra posicionado su cursor o foco de teclado.

----------------------------------------------------------------------
2. ESTADO VACÍO DE LA INTERFAZ (Empty State)
----------------------------------------------------------------------
- Captura de referencia: 02_estado_vacío_carrito.png
- Descripción: Cuando el usuario navega a la sección "Mi pedido" sin haber agregado ningún ítem previo, el sistema presenta un contenedor limpio con la ilustración de una bolsa de compras, la etiqueta "Aún no agregas productos" y un botón directo para "Volver al menú".
- Justificación HCI: Previene la confusión y la desorientación visual del usuario. Un "Empty State" informativo evita pantallas en blanco atascadas y le otorga al usuario una salida clara e intuitiva para continuar con el flujo de compra.

----------------------------------------------------------------------
3. SELECCIÓN DINÁMICA DE CATEGORÍAS (Microinteracción de Filtro)
----------------------------------------------------------------------
- Descripción: Los botones de filtrado ("Todo", "Bebidas", "Comida") implementan una transición cromática al ser seleccionados: la categoría activa resalta con un fondo rojo sólido y texto blanco, mientras que las inactivas se mantienen en color neutro con contorno sutil.
- Justificación HCI: Reduce la carga cognitiva al permitir que el usuario identifique instantáneamente el contexto de filtrado aplicado sin tener que memorizar su selección.
