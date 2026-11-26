# Guía de estilo — Landing de Albañilería

## Tokens de diseño
Colores:
- primary: #1F3864 (azul petróleo)
- secondary: #6B7280 (gris hormigón)
- accent: #D97706 (ámbar)
- bg: #F8F9FA
- text: #111827
- muted: #6B7280
- border: #E5E7EB

Tipografía: Inter / system-ui, sans-serif. Pesos 400/600/700.
Espaciado base: 8px (múltiplos de 8).
Bordes: 8px (cards), 12px (contenedores grandes).
Sombras: 0 2px 8px rgba(0,0,0,.08) (card), 0 8px 24px rgba(0,0,0,.12) (elevada).

## Layout (style/Layout)
- Container: max-width 1280px, padding lateral responsive (16/24/32px).
- Section: padding vertical 64px (desktop) / 40px (móvil), título centrado.
- Grid utilities: .grid-1, .grid-2, .grid-3 con gap 24px.
- Header hero: width 100%, height 40vh (móvil) / 50vh (desktop), object-fit: cover.

## UI (style/UI)
- Button: primario (bg primary, texto blanco), secundario (outline). Hover con transición 200ms.
- Card: fondo blanco, sombra card, padding 20px, hover eleva.
- Navbar: sticky top, fondo blanco con sombra al scroll, links con underline animado.
- Accordion: header clickable, panel con max-height transition.
- Input/Textarea: border 1px, focus ring primary.

## Responsive
Mobile-first. Breakpoints 640/768/1024/1280/1536. Grids colapsan a 1 columna bajo 768.
Imágenes con max-width:100%, height:auto. Evitar anchos fijos.

## Convenciones
- Un archivo CSS por componente en style/UI (Button.css, Card.css...).
- Layout global en style/Layout (container.css, grid.css, sections.css).
- Clases en kebab-case. Evitar !important.
- Sin librerías externas de estilos.
