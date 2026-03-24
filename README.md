# CV Juana Fernández Fernández

Proyecto de currículum vitae personal en HTML, CSS y JavaScript.

## 📁 Estructura del Proyecto

```
cv-juana/
├── index.html              ← Página principal
├── css/
│   └── style.css           ← Estilos
├── js/
│   └── main.js             ← Interactividad
├── assets/                 ← (carpeta para imágenes o recursos)
└── cv-juana.code-workspace ← Espacio de trabajo VS Code
```

## 🚀 Cómo abrir en VS Code

1. Abre VS Code
2. Ve a **Archivo → Abrir carpeta** y selecciona `cv-juana/`
   — o haz doble clic en `cv-juana.code-workspace`

## 🌐 Ver en el navegador

### Opción 1 — Live Server (recomendado)
1. Instala la extensión **Live Server** (ritwickdey.liveserver)
2. Haz clic derecho en `index.html` → **Open with Live Server**
3. Se abre en http://127.0.0.1:5500

### Opción 2 — Abrir directamente
Arrastra `index.html` al navegador o pulsa F1 → "Open in Default Browser".

## ✏️ Personalización

| Qué cambiar       | Dónde                        |
|-------------------|------------------------------|
| Textos / contenido | `index.html`                |
| Colores / tipografía | `css/style.css` (variables `:root`) |
| Animaciones       | `js/main.js`                 |

### Variables de color principales (`css/style.css`)
```css
:root {
  --navy:   #1a2e44;   /* Sidebar y títulos         */
  --teal:   #1d6e8f;   /* Acentos secundarios        */
  --accent: #e8a020;   /* Dorado — resaltados        */
}
```

## 📌 Extensiones VS Code recomendadas

- **Live Server** — Recarga automática en el navegador
- **Prettier** — Formateo de código
- **Auto Rename Tag** — Renombra etiquetas HTML en par
- **HTML CSS Support** — Autocompletado mejorado
