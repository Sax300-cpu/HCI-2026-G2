# Protocolo de evaluación — Fase 3 (CaféU V2)

**APE 6 — Fase 3.3 · Prueba de usabilidad con usuarios (Think-Aloud)**
**Prototipo:** CaféU **V2** · **Duración estimada:** 30 min por sesión
**Participantes:** 3 estudiantes externos (P1, P2, P3), anonimizados.

---

## 1. Participantes y roles

| Código | Perfil | Criterio de inclusión |
| :---: | :--- | :--- |
| P1 | 20 años · Software · 5.º semestre | Estudiante UTA, ajeno al diseño, mayor de edad |
| P2 | 21 años · Sistemas · 4.º semestre | Estudiante UTA, ajeno al diseño, mayor de edad |
| P3 | 22 años · Software · 5.º semestre | Estudiante UTA, ajeno al diseño, mayor de edad |

| Rol del laboratorio | Integrante | Función |
| :--- | :--- | :--- |
| **Moderador** | Luis Miranda | Lee el consentimiento y las consignas; aplica la pista única. |
| **Usuario** | P1 / P2 / P3 | Ejecuta las tareas y verbaliza lo que piensa. |
| **Cronometrista** | Kevin Velasco | Cronometra y registra éxito, tiempos y errores. |
| **Observador** | Manolo García | Anota frases textuales, dudas y heurísticas afectadas. |
| **Soporte técnico** | Ariel Cholota | Reinicia el estado (F5) y controla la grabación. |

**Consentimiento:** se reutiliza el documento de la Fase 1 (`ape6/Fase1/02_Consentimiento_Informado.md`). Se explica que se evalúa la interfaz, no a la persona, y que puede detener la sesión en cualquier momento.

---

## 2. Reglas de aplicación

1. El moderador lee la consigna **palabra por palabra** y no señala controles.
2. El cronómetro inicia cuando el moderador termina de leer.
3. **Tiempo máximo = 2 × tiempo meta**.
4. Si el participante se bloquea o pide ayuda, se lee **una sola vez** la pista neutra:
   *«Vuelve a leer la tarea y revisa las opciones que tienes en pantalla».*
5. El éxito se clasifica en **«Sí»** (sin ayuda), **«Con ayuda»** (después de la pista) o **«No»** (no termina o excede el máximo). Solo «Sí» cuenta para la tasa de éxito autónomo.
6. Entre participantes se ejecuta el **reinicio F5** documentado en `ajustes-v2.md`.

---

## 3. Tareas de la Fase 3

Las tareas **T1–T6** provienen del pilotaje; **T7–T9** son las tareas de refuerzo incorporadas en la Fase 3.1.

| ID | Tipo | Consigna | Meta / Máx | Criterio de éxito | Respuesta correcta |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **T1** | Consulta | ¿En qué horario atiende la cafetería? | 60 / 120 | Ubica y verbaliza el horario | Lunes a viernes, 7:00 a 19:00 |
| **T2** | Creación | Agrega un sánduche de queso a tu pedido. | 60 / 120 | El pedido refleja 1 unidad | 1 sánduche ($2,75) |
| **T3** | Modificación | Agrega también dos cafés americanos. | 60 / 120 | Añade 2 cafés y el total se actualiza | 1 sánduche + 2 cafés ($5,75) |
| **T4** | Modificación y confirmación | Ya no quieres el sánduche. Quítalo, confirma tu pedido y dime tu número de pedido. | 90 / 180 | Elimina el sánduche, confirma y lee el código | `#CU-104` ($3,00) |
| **T5** | Consulta | ¿Cuántos productos de comida ofrece la cafetería? | 60 / 120 | Cuenta los productos de la categoría | 3 |
| **T6** | Cálculo | Simula agregar 3 croissants a tu pedido y dime el total a pagar. | 90 / 180 | Agrega o calcula y verbaliza el total | $5,25 |
| **T7** | **Refuerzo · buscador** | Busca un café americano escribiendo **«cafe» sin tilde** y agrégalo. | 60 / 120 | Encuentra el producto pese a la falta de tilde | Café americano agregado |
| **T8** | **Refuerzo · filtros + recuperación** | Con el filtro **Comida** activo, busca «café». ¿Qué ves? Llega al café americano. | 90 / 180 | Reconoce el estado vacío y limpia o cambia el filtro | Café americano visible |
| **T9** | **Refuerzo · prevención** | Abre **Mi pedido** sin agregar nada e intenta confirmar. Explícame qué ocurre. | 60 / 120 | Identifica que el botón está bloqueado y por qué | Botón deshabilitado + motivo |

---

## 4. Desarrollo de la sesión (30 min)

| Momento | Duración | Actividad |
| :--- | ---: | :--- |
| Preparación | 5 min | F5, hoja de observación, cronómetro y consentimiento. |
| Introducción | 3 min | Consentimiento, perfil y explicación del think-aloud. |
| Tareas T1–T9 | 18 min | Ejecución cronometrada y registro de errores. |
| SUS | 4 min | 10 ítems, sin la mirada del moderador. |

**Cierre:** el participante comenta qué fue lo más confuso y qué funcionó mejor. El soporte ejecuta F5 y verifica el estado inicial para la siguiente sesión.

---

## 5. Instrumentos

- **Hoja de observación:** `ape6/Fase1/04_Hoja_Observacion_SUS.md` (adaptada a 9 tareas).
- **Cuestionario SUS:** 10 ítems de 1 a 5; cálculo `(impares + pares) × 2,5`.
- **Registro individual:** `resultados/P1.md`, `P2.md`, `P3.md`.
- **Métricas consolidadas:** `resultados/metricas-iso.md`.

---

## 6. Cambios respecto de la Fase 2

| Elemento | Fase 2 | Fase 3 |
| :--- | :--- | :--- |
| Tareas | 6 | **9** (T7 buscador, T8 filtros/recuperación, T9 prevención) |
| Duración | 20 min | **30 min** |
| Prototipo | V1 | **V2** con ajustes post-pilotaje |
| Criterio de éxito | Sin ayuda | Sin ayuda (se mantiene) |
| Reinicio | Recarga simple | **Lista F5 verificada** de 7 pasos |
