# Sonrisa Imperial — Landing page

Landing page minimalista para una clínica dental. Su único objetivo: que el visitante **agende una cita**.

🔗 **En vivo:** https://sonrisa-imperial-teal-nine.vercel.app

---

## Qué hace

El formulario **no tiene backend**. Cuando el visitante lo completa, JavaScript arma un mensaje con sus datos y le ofrece tres formas de enviarlo:

- **WhatsApp** → abre `wa.me` con el mensaje ya escrito
- **Correo** → abre `mailto:` con asunto y cuerpo ya escritos
- **Copiar datos** → copia el resumen al portapapeles

Así no hace falta servidor, base de datos ni costo de hosting.

---

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura y textos de la página |
| `styles.css` | Todo el diseño (colores, tipografías, layout) |
| `script.js` | Lógica del formulario y los enlaces de envío |
| `hero.jpg` | Foto principal (Unsplash, uso comercial libre) |
| `.gitignore` | Archivos que git debe ignorar |

---

## Dónde cambiar las cosas

**Teléfono y correo** → `script.js`, líneas 3–4:

```js
var WHATSAPP_NUMBER = "56976135126"; // código de país + número, sin + ni espacios
var EMAIL = "rgp1986@gmail.com";
```

**Dirección y horarios** → `index.html`, sección `id="visita"` y el `<footer>`.

**Colores** → `styles.css`, bloque `:root` del inicio:

| Variable | Color | Uso |
|---|---|---|
| `--ground` | `#F4F6F6` porcelana | Fondo |
| `--ink` | `#16211F` | Texto |
| `--accent` | `#0E5B5F` petróleo | Botones y enlaces |
| `--brass` | `#A8894F` latón | Detalles decorativos |

Hay un segundo bloque igual para **modo oscuro** (`prefers-color-scheme: dark`): si cambias un color, cámbialo en ambos.

**Tipografías** → Spectral (títulos), Figtree (texto), IBM Plex Mono (datos). Se cargan desde Google Fonts en el `<head>` de `index.html`.

---

## Ver la página en local

Abrir `index.html` directo en el navegador funciona, pero para que todo se comporte igual que en producción:

```bash
cd "/home/rodrigo/Claude/Curso Claude/Primera Landing Page" && python3 -m http.server 8000
```

Luego abre http://localhost:8000 y corta con `Ctrl+C` cuando termines.

---

## Publicar cambios

El repo está conectado a Vercel: **cada `git push` redespliega el sitio solo**, en ~30 segundos.

```bash
cd "/home/rodrigo/Claude/Curso Claude/Primera Landing Page" && git add . && git commit -m "describe tu cambio" && git push
```

Si al recargar ves la versión vieja, es caché del navegador: recarga forzada con `Ctrl+Shift+R`.

---

## Stack

- HTML + CSS + JavaScript puro — sin frameworks ni dependencias
- Repositorio: `RodriGP86/sonrisa-imperial` (rama `main`)
- Hosting: Vercel, auto-deploy desde GitHub

---

## Notas

- Modo claro/oscuro automático según la preferencia del sistema.
- Las animaciones se desactivan solas si el usuario tiene activado *reducir movimiento*.
- Responsive: el hero pasa de una a dos columnas a partir de 900 px.
- Este es un proyecto de práctica. Los datos de contacto son reales pero la dirección es de ejemplo.
