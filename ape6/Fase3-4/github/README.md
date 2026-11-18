# GitHub — Issues y colaboración de la Fase 4

**Repositorio:** <https://github.com/Sax300-cpu/HCI-2026-G2>
**Milestone:** `APE 6 · Fase 4`
**Contenido:** 9 Issues listos para crear, etiquetas, ramas, commits y Pull Requests.

---

## 1. Issues

| # | Archivo | Título | Sev. | Prioridad | Responsable | Rama |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| 1 | [`issues/H-02.md`](issues/H-02.md) | La búsqueda sin resultados no ofrece recuperación | 3 | P1 | Kevin Velasco | `fix/h-02-recuperacion-busqueda` |
| 2 | [`issues/H-01.md`](issues/H-01.md) | El aviso de «agregado al pedido» pasa desapercibido | 3 | P1 | Luis Miranda | `fix/h-01-aviso-agregado` |
| 3 | [`issues/H-04.md`](issues/H-04.md) | El motivo del bloqueo está lejos del botón «Confirmar» | 2 | P1 | Manolo García | `fix/h-04-motivo-confirmar` |
| 4 | [`issues/H-03.md`](issues/H-03.md) | Salir de la confirmación borra el pedido sin aviso | 2 | P2 | Luis Miranda | `fix/h-03-salida-confirmacion` |
| 5 | [`issues/H-05.md`](issues/H-05.md) | El código de retiro no se puede copiar ni explica su uso | 2 | P2 | Ariel Cholota | `fix/h-05-codigo-copiable` |
| 6 | [`issues/H-08.md`](issues/H-08.md) | Tocar un ítem del pedido no abre su detalle | 2 | P3 | Manolo García | `feat/h-08-item-editable` |
| 7 | [`issues/H-06.md`](issues/H-06.md) | El contador del carrito no tiene unidad ni etiqueta | 1 | P4 | Ariel Cholota | `fix/h-06-contador-etiqueta` |
| 8 | [`issues/H-07.md`](issues/H-07.md) | Falta un indicador de pasos del flujo | 1 | P4 | Ariel Cholota | `feat/h-07-indicador-pasos` |
| 9 | [`issues/H-09.md`](issues/H-09.md) | El total del pedido no se ve desde el menú | 1 | P4 | Kevin Velasco | `feat/h-09-total-en-menu` |

Cada archivo contiene el cuerpo completo del Issue: contexto, evidencia, propuesta, criterio de aceptación y referencias.

---

## 2. Etiquetas

Crearlas antes de abrir los Issues (**Issues → Labels → New label**). Los colores son sugerencias.

| Etiqueta | Color | Uso |
| :--- | :--- | :--- |
| `sev/1` | `#c2e0c6` | Severidad 1 · cosmético |
| `sev/2` | `#fef2c0` | Severidad 2 · menor |
| `sev/3` | `#f9d0c4` | Severidad 3 · mayor |
| `prio/p1` | `#b60205` | Antes de cualquier entrega |
| `prio/p2` | `#d93f0b` | Siguiente iteración |
| `prio/p3` | `#fbca04` | Después de P2 |
| `prio/p4` | `#0e8a16` | Pulido final |
| `metodo/ambos` | `#5319e7` | Detectado por heurística y usuarios |
| `metodo/heuristica` | `#1d76db` | Solo inspección |
| `metodo/usuarios` | `#006b75` | Solo think-aloud |
| `area/busqueda` · `area/prevencion` · `area/confirmacion` · `area/pedido` · `area/menu` · `area/navegacion` · `area/retroalimentacion` · `area/accesibilidad` | `#ededed` | Zona de la interfaz |

---

## 3. Cómo crear los Issues

### Opción A — Desde la web (recomendado si no hay `gh`)

1. Abrir <https://github.com/Sax300-cpu/HCI-2026-G2/issues/new>.
2. Copiar el **título** de la tabla de la sección 1.
3. Copiar **todo el contenido** del archivo `issues/H-0x.md` en el cuerpo.
4. Asignar las etiquetas, el milestone `APE 6 · Fase 4` y el responsable.
5. Repetir con los 9 archivos.

> El título del Issue es la primera línea del archivo, sin el `#`. Ejemplo: `H-02 · La búsqueda sin resultados no ofrece recuperación`.

### Opción B — Con GitHub CLI

Si el equipo instala `gh` y ejecuta `gh auth login`:

```powershell
cd C:\xampp\htdocs\ExposicionIHC
gh issue create --repo Sax300-cpu/HCI-2026-G2 `
  --title "H-02 · La búsqueda sin resultados no ofrece recuperación" `
  --body-file ape6/Fase3-4/github/issues/H-02.md `
  --label "sev/3,prio/p1,metodo/ambos,area/busqueda" `
  --milestone "APE 6 · Fase 4" `
  --assignee KevinVelasco
```

Repetir cambiando título, archivo, etiquetas y responsable según la tabla.

---

## 4. Ramas y commits

| Regla | Ejemplo |
| :--- | :--- |
| Rama por Issue | `fix/h-02-recuperacion-busqueda` |
| Una rama, un Issue | No mezclar correcciones en la misma rama. |
| Mensaje de commit | `fix(h-02): agrega acciones de salida al estado vacío` |
| Commits pequeños | Un commit por cambio verificable, no uno gigante al final. |
| Referencia al Issue | Incluir `Refs #12` en el commit o `Closes #12` en el PR. |

```powershell
git switch main
git pull
git switch -c fix/h-02-recuperacion-busqueda
# ... cambios ...
git add ape6/prototipo
git commit -m "fix(h-02): agrega acciones de salida al estado vacio"
git push -u origin fix/h-02-recuperacion-busqueda
```

---

## 5. Pull Requests

Cada integrante abre su propio PR desde su cuenta. Eso es lo que hace **verificable** la colaboración: el historial muestra autor, rama, revisión y fusión.

### Plantilla de PR

```markdown
## Qué cambia
Corrige H-02: la búsqueda sin resultados ahora explica la causa y ofrece salida.

## Issue relacionado
Closes #12

## Criterio técnico
C-02 — 3/3 recuperan en ≤ 10 s sin pista.

## Cómo probarlo
1. Abrir ape6/prototipo/index.html
2. Menú → filtro Comida → buscar «café»
3. Verificar el mensaje y las dos acciones

## Evidencia
- [ ] Captura del antes
- [ ] Captura del después
- [ ] Regresión de T7 y T8

## Revisión
- Revisor: Manolo García
```

### Matriz de revisión

| PR | Autor | Revisor |
| :--- | :--- | :--- |
| H-02 · búsqueda | Kevin Velasco | Manolo García |
| H-01 · aviso | Luis Miranda | Kevin Velasco |
| H-04 · motivo | Manolo García | Ariel Cholota |
| H-03 · salida | Luis Miranda | Manolo García |
| H-05 · código | Ariel Cholota | Luis Miranda |
| H-08 · ítem editable | Manolo García | Kevin Velasco |
| H-06 · contador | Ariel Cholota | Kevin Velasco |
| H-07 · pasos | Ariel Cholota | Luis Miranda |
| H-09 · total | Kevin Velasco | Ariel Cholota |

Nadie revisa su propio PR. Si un integrante acumula tres revisiones, se redistribuye.

---

## 6. Evidencia de colaboración

Para que la colaboración sea verificable en el repositorio, cada entrega debe dejar:

| Evidencia | Dónde se ve |
| :--- | :--- |
| Issue creado y asignado | Pestaña **Issues** |
| Rama con nombre del hallazgo | Pestaña **Branches** |
| Commits con el ID (`fix(h-02): …`) | Historial de la rama |
| PR con descripción y criterio | Pestaña **Pull requests** |
| Revisión de otro integrante | Comentario de aprobación en el PR |
| Fusión a `main` | Historial de `main` |
| Cierre del Issue | Estado **Closed** con enlace al PR |

### Registro de aportes

| Integrante | Issues asignados | Rol en la evaluación | Evidencia esperada |
| :--- | :--- | :--- | :--- |
| Kevin Velasco | H-02, H-09 | Cronometrista | Rama + PR + revisión de H-01 y H-08 |
| Luis Miranda | H-01, H-03 | Moderador | Rama + PR + revisión de H-05 y H-07 |
| Manolo García | H-04, H-08 | Observador | Rama + PR + revisión de H-02 y H-03 |
| Ariel Cholota | H-05, H-06, H-07 | Soporte técnico | Rama + PR + revisión de H-04 y H-09 |

> Los Issues y PRs **no se crean solos**: los abre cada integrante desde su cuenta. Este directorio deja el contenido listo para pegarlo, de modo que el equipo solo tenga que crear, asignar y revisar.

---

## 7. Orden sugerido de trabajo

1. Crear las etiquetas y el milestone.
2. Crear los 9 Issues y asignarlos.
3. Iteración 1: H-02, H-01, H-04 (P1).
4. Re-ejecutar T2, T8 y T9 y adjuntar la evidencia en cada PR.
5. Iteración 2: H-03, H-05 y H-08.
6. Iteración 3: H-06, H-07 y H-09 + regresión completa de las 9 tareas.
7. Actualizar `docs/backlog.md` con los números reales de Issue y PR.
