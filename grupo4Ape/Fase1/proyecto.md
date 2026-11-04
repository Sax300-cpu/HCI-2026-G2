# Ficha de Aplicación al Proyecto — Guía Práctica APE 5 (Fase 1)

## 1. Integrantes del Grupo
- **Cholota Bastidas Ariel Isaí**
- **García Amores Manolo José**
- **Miranda Tarupi Luis Sebastián**
- **Velasco Huayamave Kevin Andrés**

---

## 2. Secuencia de Flujo de Interacción
- **Actor:** Estudiante / Usuario del sistema en dispositivo móvil o escritorio.
- **Tarea Crítica:** Seleccionar y reservar un cupo en el taller "Interfaces web accesibles".
- **Dato Decisivo:** Estado de disponibilidad de la reserva y confirmación del horario/laboratorio.
- **Acción Principal:** Presionar el botón nativo `<button>` ("Reservar un lugar").
- **Estado Final:** Notificación en pantalla a través de la región semántica `<p role="status">` ("Reserva confirmada").

---

## 3. Regla de Negocio y Criterio de Aceptación Medible
- **Regla de Negocio:** Un usuario solo puede tener una reserva activa a la vez para evitar reservas duplicadas por clics accidentales.
- **Criterio de Aceptación Medible:** Al hacer clic en "Reservar un lugar", el botón principal debe cambiar inmediatamente su propiedad a `disabled`, actualizar el texto a "Lugar reservado" en $< 100\text{ ms}$, cambiar el estado en `<p role="status">` y mover automáticamente el foco accesible al botón de cancelación ("Cancelar mi reserva").

---

## 4. Diagnóstico del Boceto A (Vista Móvil 360 px)
Al abrir el boceto inicial (`prototipo-A.html`) a un ancho de **360 px**, se identificó un problema grave de usabilidad:
- **Desbordamiento Horizontal (Overflow):** Debido a una maquetación con ancho fijo de `960px`, el panel lateral (`<aside>`) queda completamente cortado y fuera de la pantalla del usuario.
- **Decisión HCI:** Reestructurar la interfaz con un diseño **Mobile-First** (1 sola columna base), aplicando un punto de corte mediante `@media (min-width: 48rem)` para activar la distribución de 2 columnas únicamente cuando la pantalla sea igual o mayor a **768 px**.

---

## 5. Estructura y Accesibilidad Implementada
- **HTML5 Semántico:** `<header>`, `<main>`, `<article>`, `<aside>`, `<p role="status">`.
- **Navegación por Teclado:** Uso de controles nativos navegables mediante la tecla `Tab`.
- **Feedback Visual y Auditivo:** Notificaciones leíbles por lectores de pantalla en tiempo real al cambiar los estados de la tarea.