# RetroGames Store

Tienda demostrativa construida con React, Vite y Bootstrap. El catálogo retro se carga de forma asíncrona desde un archivo JSON del proyecto, con búsqueda en tiempo real, carrito con cantidades y total, y formulario de contacto con validación local.

## Funcionalidades

- Carga asíncrona del catálogo desde `public/data/productos.json` mediante `fetch`.
- Imágenes de consolas servidas localmente desde `public/img/`.
- Búsqueda en tiempo real por nombre, descripción o categoría.
- Carrito que conserva nombre, imagen, precio y cantidad de cada producto.
- Precios del catálogo expresados en pesos chilenos (CLP).
- Controles para aumentar/disminuir unidades, quitar artículos y consultar subtotales y total.
- Estados visibles de carga, error con reintento y búsqueda sin resultados.
- Validación local del asunto, correo, nombre y mensaje del formulario de contacto.
- Diseño adaptable con Bootstrap y estilos propios.
- Tarjetas de producto con selector de cantidad, precio y nombre.

## Interfaz del catálogo

Las tarjetas usan las clases `card` y `btn` de Bootstrap junto con CSS Grid. Su fondo negro, texto amarillo y botones naranjas mantienen el tema retro del sitio.

## Tecnologías

- React y JavaScript
- Vite
- Bootstrap 5
- JSON local servido por GitHub Pages

## Requisitos y ejecución local

Se necesita Node.js y npm instalados.

```bash
npm install
npm run dev
```

Abre la dirección local que informe Vite, normalmente `http://localhost:5173`.

## Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción en dist/
npm run preview  # Previsualizar la build
npm run lint     # Revisar el código
```

## Editar el catálogo

Agrega o modifica productos en `public/data/productos.json`. Cada producto debe incluir `id`, `titulo`, `descripcion`, `categoria`, `precio` e `imagen`. El campo `imagen` es relativo a `public/`; por ejemplo, `img/gameCube.png` apunta a `public/img/gameCube.png`.

Al desplegar, Vite antepone automáticamente la base del sitio a las rutas del JSON y de las imágenes, por lo que funciona tanto en local como en GitHub Pages.

## Estructura

```text
public/
├── data/productos.json             Catálogo editable de consolas
└── img/                             Imágenes locales de consolas y encabezado
src/
├── components/
│   ├── Productos/
│   │   ├── ContenedorProductos.jsx Carga, estados y filtro del catálogo
│   │   ├── ListaProductos.jsx      Renderizado separado de las tarjetas
│   │   └── TarjetaProducto.jsx     Tarjeta individual y acción de carrito
│   ├── carrito/                    Estado y contexto del carrito
│   ├── layout/                     Encabezado, navegación y estructura
│   ├── CartPanel.jsx               Resumen, cantidades y totales
│   └── ...
├── services/
│   └── productos.js                Petición y validación del JSON local
├── App.jsx
└── main.jsx
.github/workflows/deploy.yml        Compilación y despliegue a GitHub Pages
vite.config.js
```

## Despliegue en GitHub Pages

El workflow de GitHub Actions construye la aplicación y publica `dist/` al hacer push a `main`. En **Settings > Pages > Build and deployment**, la fuente debe ser **GitHub Actions**.

Sitio: <https://sarasenia.github.io/retro-games-EFT/>

## Evidencias para la entrega

Captura estas vistas desde el navegador y adjúntalas en la plataforma de entrega:

1. `catalogo.png`: catálogo cargado desde el JSON con productos e imágenes locales.
2. `busqueda.png`: búsqueda escrita y tarjetas filtradas.
3. `carrito.png`: artículo con más de una unidad, controles de cantidad, subtotal y total.
4. `error-catalogo.png`: estado de error con el botón **Reintentar** (se puede verificar temporalmente sin conexión).

El JSON es estático: para actualizar el catálogo publicado, modifica el archivo y vuelve a desplegar el sitio.
