# Arquitectura — Landing de Albañilería (Gustavo Burique)

## Visión
Landing profesional del cliente Gustavo Burique (albañil/constructor).
Presenta servicios, obras realizadas, FAQ y contacto. Mantenible, escalable,
separación clara entre UI y lógica.

Stack: React 19 + Vite 8, CSS puro, React Router Dom.

## Estructura
src/
├── assets/      # imágenes, íconos, fuentes
├── components/  # UI reutilizable sin lógica de negocio
├── page/        # vistas por ruta
├── data/        # contenido estático
├── util/        # helpers puros
└── style/
    ├── Layout/  # estructura: grid, contenedores, secciones, responsive base
    └── UI/      # estilos de componentes
agents/
├── ARCHITECTURE.md
└── style.md

## Navegación (React Router Dom)
Rutas: "/" Home (todas las secciones), "/obras" (opcional), "/servicios" (opcional), "*" NotFound.
Home en orden: Header, Navbar, Obras, Servicios, FAQ, Contacto, Footer.

## Responsabilidad por sección
Header: identidad + foto horizontal a ancho completo.
Navbar: navegación entre secciones/rutas.
Obras: portafolio de trabajos.
Servicios: servicios ofrecidos con descripción.
FAQ: resolver dudas comunes.
Contacto: datos + CTA/formulario.
Footer: info legal, copyright, links rápidos.

## Componentes reutilizables
Button, Card, Navbar/NavLink, Section, Accordion, Input/Textarea,
Container, ImageWithFallback, Footer, Header. Sin lógica de negocio; datos por props.

## Datos (data/)
works.js: { id, title, description, image, category, date }
services.js: { id, title, description, icon }
faqs.js: { id, question, answer }
contact.js: { phone, email, address, whatsapp, socials }
site.js: { clientName, tagline, heroImage }

## Utilidades (util/)
formatPhone, formatDate, validateEmail, validateForm, scrollToSection.

## Responsive (mobile-first)
Breakpoints: 640 (sm), 768 (md), 1024 (lg), 1280 (xl), 1536 (2xl).
Grids: 1 col móvil → 2 tablet → 3 desktop. Header con object-fit: cover y altura adaptativa.

## Riesgos técnicos
Imágenes pesadas → webp + lazy load. Sin backend → decidir mailto/WhatsApp.
Accesibilidad (contraste, alt, teclado). SEO (meta + lang="es"). Performance (memoizar).
react-router-dom instalado.

## Roadmap
1. Instalar react-router-dom y configurar rutas. (hecho)
2. Definir data/ y util/.
3. Crear components/ + style/UI.
4. Crear page/ + style/Layout.
5. Integrar secciones responsive.
6. Optimizar imágenes y accesibilidad.
7. QA cross-device y despliegue.

## Separación UI / lógica
components/ + style/ = UI pura. page/ = composición. data/ = contenido. util/ = lógica pura.
