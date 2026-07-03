# PulmOx Frontend

Frontend corporativo desarrollado para PulmOx Costa Rica.

El proyecto implementa una experiencia web responsive y mobile-first para presentar la informacion institucional, servicios, sedes, especialistas, catalogo informativo de equipos medicos y canales de contacto.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React

## Requisitos

- Node.js
- npm

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Validacion

```bash
npm run lint
npm run build
```

## Estructura general

- `src/components`: componentes reutilizables de interfaz y layout.
- `src/pages`: paginas principales y vistas dinamicas.
- `src/data`: contenido local tipado utilizado por el sitio.
- `src/config`: configuraciones generales del sitio.
- `src/utils`: utilidades compartidas.
- `src/types`: definiciones TypeScript.
- `public/images`: recursos visuales publicos.

## Rutas principales

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

## Build de produccion

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`.

## Notas

Este repositorio contiene el frontend del sitio. No incluye backend, base de datos, carrito de compras, pasarela de pago ni panel administrativo.
