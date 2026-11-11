# UNIVERSIDAD TÉCNICA DE AMBATO
**FACULTAD DE INGENIERÍA EN SISTEMAS, ELECTRÓNICA E INDUSTRIAL**  
**CARRERA DE SOFTWARE**  
**CICLO ACADÉMICO:** JULIO – DICIEMBRE 2026  
**ASIGNATURA:** Interacción Humano-Computador (Quinto Semestre)  
**DOCENTE:** Ing. José Rubén Caiza Caizabuano, Mg.  
**APE 6 – FASE 1:** Planificación de la evaluación de usabilidad del prototipo  
**INTEGRANTES:**  
- Luis Miranda
- Kevin Velazco  
- Manolo García  
- Ariel Cholota  

---

## 1. Definición del prototipo (Objeto de evaluación)
**CaféU** es un prototipo de aplicación web móvil para que los estudiantes pidan en la cafetería universitaria antes de llegar.

- **Sistema:** Prototipo interactivo web móvil desarrollado en los APE 4 y 5, que permite visualizar el catálogo de comida y bebidas, gestionar el pedido en tiempo real, calcular subtotales y confirmar la orden generando un código único de retiro.
- **Usuarios:** Estudiantes universitarios de la Universidad Técnica de Ambato (FISEI) que realizan pedidos en la cafetería del campus.
- **Contexto de utilización:** Uso cotidiano dentro del campus universitario o camino a él desde el navegador móvil o computador portátil en recesos cortos entre clases.

## 2. Pregunta de evaluación (Norma ISO 9241-11)
«¿En qué medida el prototipo **CaféU** permite a los estudiantes universitarios consultar el menú y realizar pedidos en la cafetería universitaria antes de llegar con **eficacia**, **eficiencia** y **satisfacción**, y qué problemas de usabilidad lo impiden?»

## 3. Métodos de evaluación (Triangulación)
Se aplican dos métodos complementarios (analítico y empírico):
1. **Evaluación heurística (Método analítico):** Los integrantes del equipo inspeccionan la interfaz aplicando las **10 heurísticas de usabilidad de Jakob Nielsen** (H1: Visibilidad del estado del sistema, H2: Relación entre el sistema y el mundo real, H3: Control y libertad del usuario, H4: Consistencia y estándares, H5: Prevención de errores, H6: Reconocer antes que recordar, H7: Flexibilidad y eficiencia de uso, H8: Diseño estético y minimalista, H9: Ayudar a reconocer, diagnosticar y recuperarse de errores, H10: Ayuda y documentación). Permite prever problemas y explicar qué principio se viola.
2. **Prueba con usuarios y pensamiento en voz alta (Método empírico):** Tres usuarios reales ejecutan seis tareas representativas mientras verbalizan en voz alta lo que piensan, buscan o dudan frente a la interfaz. Confirma los problemas en el uso real y mide su impacto.

## 4. Perfil y selección de participantes
- **Perfil:** Estudiantes universitarios de la UTA que utilizan el servicio de cafetería y no forman parte del grupo desarrollador.
- **Cantidad para el pilotaje:** 3 participantes.
- **Criterios de exclusión:** Haber participado en el diseño o construcción del prototipo CaféU, conocer previamente las tareas de la evaluación o ser menor de edad.
- **Identificación y anonimato:** Los participantes se registran únicamente con los códigos **P1, P2 y P3**. No se publican nombres ni datos personales en el repositorio ni en los informes.

## 5. Métricas de usabilidad y reglas de operación (ISO 9241-11)

| Métrica | Dimensión ISO 9241-11 | Cómo se calcula |
| :--- | :--- | :--- |
| **Tasa de éxito** | Eficacia | `(Participantes con «Sí» / Total de participantes) × 100` |
| **Tiempo en tarea** | Eficiencia | Segundos desde que el moderador termina de leer la consigna hasta que el usuario termina o abandona. Se reporta la mediana. |
| **Errores** | Eficacia y eficiencia | **Críticos** (impiden terminar la tarea) y **No críticos** (el usuario se recupera por sí solo). |
| **SUS** | Satisfacción | 10 ítems de 1 a 5. Ítems impares: `valor - 1`. Ítems pares: `5 - valor`. `Suma total × 2,5` (escala 0 a 100; referencia: 68). |

### Reglas fijas antes de probar:
- **Calificación del éxito:** Se clasifica en **«Sí»** (completa sin ayuda), **«Con ayuda»** (completa después de recibir la pista única) o **«No»** (no termina o supera el tiempo máximo). Solo «Sí» cuenta como éxito en la métrica.
- **Pista única estandarizada:** Si el participante se detiene o solicita ayuda, se lee textualmente una sola vez la frase neutra: *«Vuelve a leer la tarea y revisa las opciones que tienes en pantalla»*.
- **Reinicio al estado inicial:** Entre cada participante, el soporte técnico recarga la página web del prototipo CaféU en el navegador para dejar el pedido vacío y restablecer el estado inicial.

## 6. Asignación de roles del equipo

| Rol | Integrante | Qué hace durante la sesión |
| :--- | :--- | :--- |
| **Moderador** | Luis Sebastián Miranda | Lee el guion de consentimiento y las tareas palabra por palabra. No ayuda ni señala la pantalla. |
| **Registro de métricas** | Kevin [Apellido] | Una sola persona cronometra y anota éxito, tiempo y errores críticos/no críticos. |
| **Observador** | Manuel [Apellido] | Anota frases textuales del usuario, dudas y la posible heurística de Nielsen violada. |
| **Soporte técnico** | [Integrante 4] | Deja el prototipo CaféU en el estado inicial (recarga la página) y controla la grabación. |

## 7. Criterios de validación del protocolo (Paso a Fase 2)
El protocolo se considerará validado y listo para la Fase 2 si cumple estas cinco condiciones:
1. Ningún participante pide repetir la tarea por falta de claridad en la redacción.
2. Al menos 2 de los 3 participantes terminan las tareas antes del tiempo máximo fijado.
3. La hoja de observación permite registrar todos los datos sin omisiones.
4. No se presentan fallos técnicos en el prototipo ni durante el reinicio entre sesiones.
5. La sesión completa dura **20 minutos o menos** por participante.