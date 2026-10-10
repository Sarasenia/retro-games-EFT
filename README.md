# RetroGames Store

RetroGames Store es una tienda online enfocada en productos relacionados con videojuegos retro: juegos clásicos, consolas retro, conectores, accesorios y elementos para fanáticos del gaming vintage.

La aplicación está desarrollada con React, Vite y Bootstrap, y su objetivo es ofrecer una experiencia de compra simple, visual y moderna para productos de coleccionistas y usuarios interesados en la nostalgia del gaming.

## Características

- Catálogo de productos con enfoque retro y gamer
- Sección de consolas y accesorios
- Visualización de juegos clásicos y productos relacionados
- Carrito de compras funcional para agregar y quitar artículos
- Formulario de contacto con validación local
- Diseño responsive con estilo moderno y temático
- Datos cargados desde DummyJSON para simular un e-commerce real

## Tecnologías utilizadas

- React
- Vite
- Bootstrap 5
- JavaScript
- CSS personalizado

## Requisitos

Antes de ejecutar el proyecto necesitas tener instalado:

- Node.js
- npm
- Un navegador web moderno

## Instalación

Dentro de la carpeta del proyecto, ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

Luego abre la URL que te indique Vite en tu navegador, normalmente:

```text
http://localhost:5173
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Descripción de scripts

- `npm run dev`: inicia el servidor de desarrollo
- `npm run build`: genera la versión de producción
- `npm run preview`: previsualiza la build generada
- `npm run lint`: ejecuta la validación de código

## Estructura del proyecto

```text
retro-games/
├── public/
│   └── img/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Funcionalidad principal

La tienda permite:

- explorar productos del catálogo
- seleccionar artículos de interés
- agregarlos al carrito de compras
- gestionarlos desde el carrito
- navegar una interfaz intuitiva para una experiencia de compra fluida

## Datos e imágenes

Los productos se obtienen desde la API de DummyJSON configurada en `vite.config.js`. Las imágenes del catálogo se almacenan en `public/img/` para mantener una estructura clara y visualmente consistente.

## Objetivo del proyecto

RetroGames Store busca recrear una experiencia de e-commerce para el mercado de videojuegos retro, combinando nostalgia, diseño atractivo y funcionalidad práctica para la compra de productos del mundo gamer clásico.
