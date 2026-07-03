# PulmOx Costa Rica Frontend

Frontend corporativo para PulmOx Costa Rica construido con Vite, React, TypeScript, Tailwind CSS, React Router DOM y Lucide React.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Estructura

- `src/config`: configuracion del sitio, contacto, colores indirectos e imagenes.
- `src/data`: servicios, equipos, categorias, sedes, doctores, FAQ y navegacion.
- `src/types`: interfaces TypeScript compartidas.
- `src/utils`: relaciones locales y generador de URL de WhatsApp.
- `src/components`: componentes reutilizables comunes y de layout.
- `src/pages`: paginas y rutas dinamicas.
- `public/images`: imagenes reemplazables del sitio.

## Como modificar colores y Kanit

Los colores principales estan en `tailwind.config.ts`:

- Blanco: `brand.white` = `#FFFFFF`
- Azul principal: `brand.primary` = `#006CFF`

La fuente Kanit esta importada en `src/index.css` y configurada como `font-kanit` en Tailwind.

## Como cambiar WhatsApp y contacto

Edite `src/config/contact.ts`:

- `whatsappNumber`
- `phoneNumber`
- `email`
- `address`
- redes sociales

Los enlaces se generan con `src/utils/whatsapp.ts`.

## Como reemplazar las imagenes

Coloque los archivos dentro de `public/images/` y edite las rutas en:

- `src/config/images.ts`
- `src/data/services.ts`
- `src/data/equipment.ts`
- `src/data/locations.ts`
- `src/data/doctors.ts`

Si una imagen no existe, `ResponsiveImage` muestra un placeholder visual y evita iconos de imagen rota.

## Como agregar contenido

Agregue servicios en `src/data/services.ts`. Cada servicio necesita `id`, `slug`, textos, imagen, beneficios, proceso y `whatsappMessage`.

Agregue equipos en `src/data/equipment.ts`. Las categorias estan en `src/data/equipmentCategories.ts`.

Agregue sedes en `src/data/locations.ts`. Configure direccion, telefono, WhatsApp, mapa, horarios, `serviceIds` y `doctorIds`.

Agregue doctores en `src/data/doctors.ts`. Relacione cada doctor con `locationIds` y `serviceIds`.

Las relaciones se resuelven en `src/utils/relations.ts`; no duplique informacion manualmente dentro de las paginas.

## Rutas

- `/`
- `/nosotros`
- `/servicios`
- `/servicios/:slug`
- `/camara-hiperbarica`
- `/equipos`
- `/equipos/:slug`
- `/sedes`
- `/sedes/:slug`
- `/doctores`
- `/contacto`
- `/404`

## Publicacion

Ejecute `npm run build`. El resultado de produccion queda en `dist/` y puede publicarse en cualquier hosting estatico compatible con Vite.

## Valores por reemplazar

Busque `REEMPLAZAR_` en `src/config` y `src/data` para completar telefonos, correos, direcciones, mapas, doctores, modelos y horarios definitivos.
