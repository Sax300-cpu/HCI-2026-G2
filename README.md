# Prototipos y Wireframes — Grupo 2

Material de apoyo para la exposición presencial del **APE 4: Prototipado - Wireframes**, correspondiente a la **Fase 1**. La exposición está prevista para el **13 y 14 de octubre de 2026**.

> El caso CaféU de esta presentación es un ejemplo didáctico independiente. La aplicación obligatoria de sitemap, user flow, navegación, componentes y wireframes al proyecto del grupo se realizará posteriormente.

## Problema

Al comenzar a desarrollar una interfaz directamente en código, el equipo puede tener distintas interpretaciones de los requisitos, omitir pantallas o descubrir tarde que la navegación no permite completar una tarea con claridad. Estos cambios tardíos pueden causar retrabajo y aumentar el esfuerzo de desarrollo.

Para explicar cómo anticipar estos problemas, la exposición usa **CaféU**, un caso ficticio de cafetería universitaria. El usuario necesita consultar productos y realizar un pedido de forma sencilla. El ejemplo permite mostrar cómo traducir ese requisito a estructura, recorrido y pantallas antes de programar.

## Objetivo

Explicar cómo pasar de los requisitos a la arquitectura de información, los flujos de usuario y los wireframes de baja fidelidad, y cómo esos artefactos sirven de base para construir un prototipo usable.

## Conceptos de HCI utilizados

- **Diseño centrado en las personas:** partir de las necesidades, tareas y contexto de quienes usarán el sistema.
- **Arquitectura de información y sitemap:** organizar y representar jerárquicamente las secciones.
- **User flow:** mostrar los pasos, decisiones y resultados de una tarea.
- **Wireframe:** representar la estructura y jerarquía de una pantalla antes de definir su apariencia final.
- **Prototipo de baja fidelidad:** representación temprana que permite conversar, revisar y cambiar ideas con poco esfuerzo.
- **Componentes e interacción:** identificar controles como botones, campos, tarjetas y navegación, junto con su función.
- **Usabilidad e iteración:** revisar si la persona puede comprender y completar una tarea, y mejorar la propuesta a partir de observaciones.

## Procedimiento de la Fase 1

1. **Analizar el requisito y el usuario:** definir la necesidad que atenderá el caso CaféU y la tarea que se desea completar.
2. **Organizar el contenido:** listar las secciones y construir un sitemap.
3. **Trazar el recorrido:** dibujar el user flow desde el inicio hasta la confirmación del pedido, incluidos los posibles errores o decisiones.
4. **Definir navegación y componentes:** determinar cómo se llega a cada sección y qué controles necesita cada pantalla.
5. **Bocetar wireframes de baja fidelidad:** ubicar contenido, controles y jerarquía visual sin distraerse con estilos finales.
6. **Explicar y revisar:** mostrar cómo cada artefacto responde al requisito y anotar dudas o mejoras antes de implementar.

## Herramientas sugeridas

| Necesidad | Opciones |
|---|---|
| Sitemap y diagramas | diagrams.net (draw.io), FigJam o papel y lápiz |
| User flow | FigJam, Miro, diagrams.net |
| Wireframes y prototipos | Figma, Balsamiq o Penpot |
| Presentación | HTML con Reveal.js |
| Colaboración y documentación | GitHub, Markdown y herramientas ofimáticas |

Las herramientas son sugerencias; se puede comenzar con papel y lápiz. Lo importante es que las decisiones de estructura y navegación se entiendan y puedan revisarse.

## Resultados esperados

- Sitemap del caso CaféU.
- User flow de una tarea principal: consultar productos, seleccionar uno y confirmar el pedido.
- Definición inicial de las pantallas, su navegación y sus componentes.
- Cinco wireframes estáticos de baja fidelidad: Inicio, Menú, Detalle del producto, Mi pedido y Confirmación.
- Explicación didáctica de la secuencia requisito → arquitectura → flujo → wireframe.

Estos resultados corresponden al ejemplo de la exposición. La implementación obligatoria de la Fase 1 en el proyecto del grupo se desarrollará después.
Los wireframes son estáticos: muestran controles previstos, pero no conforman un prototipo navegable ni de alta fidelidad.

## Integrantes

- Kevin Velasco
- Luis Miranda
- Manolo García
- Ariel Cholota

## Conclusión general

Los wireframes permiten hacer visibles las ideas de una interfaz y conversar sobre ellas antes de invertir tiempo en su implementación. Al detectar omisiones y problemas de navegación temprano, pueden reducir el retrabajo y los costos asociados a cambios tardíos, además de ofrecer a los desarrolladores una referencia compartida y clara. No sustituyen las pruebas con usuarios ni garantizan por sí solos la usabilidad: son una etapa para aprender, validar y mejorar el diseño.

## Archivos

- [`presentacion/index.html`](presentacion/index.html): exposición navegable con Reveal.js.
- [`presentacion/ejercicio-cafeu.html`](presentacion/ejercicio-cafeu.html): actividad grupal para dibujar las ramas del user flow y un wireframe de baja fidelidad para cada rama.
- [`prototipos/cafeu-wireframes.html`](prototipos/cafeu-wireframes.html): lámina adaptable e imprimible con los cinco wireframes de baja fidelidad del ejemplo CaféU.
- [`resultados/presentacion-cafeu.pdf`](resultados/presentacion-cafeu.pdf): versión PDF de la presentación.
- [`docs/investigacion.md`](docs/investigacion.md): conceptos y procedimiento de la Fase 1.
- [`docs/preguntas.md`](docs/preguntas.md): banco de 10 preguntas con respuestas y opciones para preparar la evaluación en Wayground.
- [`docs/preguntas_wayground.csv`](docs/preguntas_wayground.csv): preguntas en formato tabular CSV para facilitar su carga o copia.
- [`docs/conclusiones.md`](docs/conclusiones.md): conclusiones del tema.

## Uso de la presentación

Abre `presentacion/index.html` en un navegador con conexión a internet para cargar Reveal.js desde CDN. Usa las flechas del teclado o los controles en pantalla para avanzar y retroceder. También puedes abrirla en modo pantalla completa con `F`.
