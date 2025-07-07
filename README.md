# CV React - Kehiner Castillo

Este proyecto es una hoja de vida (CV) digital construida con React utilizando componentes reutilizables y el paso de datos mediante **props** con **desestructuración**. Forma parte de la actividad formativa **GA1-220501096-03-AA1-EV07** del SENA.

---

## 🎯 Objetivo

Aplicar el uso de **props** y **desestructuración** para crear componentes reutilizables, modulares y dinámicos, mejorando la escalabilidad y organización del código en una aplicación React.

---

## 🧱 Estructura del Proyecto

El proyecto contiene los siguientes componentes:

| Componente      | Props que recibe                                                                 |
|-----------------|-----------------------------------------------------------------------------------|
| `CabeceraCV`    | `nombre`, `cargo`, `contacto`, `telefono`, `ciudad`, `foto`                      |
| `Perfil`        | `resumen`, `habilidades`                                                         |
| `Experiencia`   | `experiencias` (arreglo con cargo, empresa y periodo)                            |
| `Educacion`     | `estudios` (arreglo con título, institución y periodo)                           |
| `StackTecnologias` | `technologies` (arreglo con nombre y tipo de tecnología)                     |

Todos los datos se definen como constantes dentro del archivo `App.jsx` y se pasan a cada componente mediante **props**.

---

## 🔄 Uso de Props y Desestructuración

Se implementó la desestructuración directamente en los parámetros de cada componente. Ejemplo:

```jsx
export default function Perfil({ resumen, habilidades }) {
  return (
    <section>
      <p>{resumen}</p>
      <ul>
        {habilidades.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
