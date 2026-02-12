# Tower Top Construction Website

## Overview

Tower Top is a bilingual (English/Arabic) construction company website built with a modern React frontend and Express backend. The application showcases construction services including commercial buildings, residential apartments, and various contracting plans. Key features include a contact form system, customer reviews, company information pages, and full RTL (right-to-left) language support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS variables for theming (dark/light mode support)
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll-triggered reveals
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Internationalization**: react-i18next with browser language detection

The frontend follows a page-based architecture with shared components. Pages are located in `client/src/pages/` and reusable components in `client/src/components/`. The design uses a strict red, black, and white color palette with glassmorphism effects.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: REST endpoints defined in `shared/routes.ts` with Zod schema validation
- **Build Tool**: Vite for frontend, esbuild for server bundling

The backend serves both the API and static files in production. Routes are registered in `server/routes.ts` with input validation using shared Zod schemas.

### Shared Code
- **Location**: `shared/` directory
- **Purpose**: Contains database schema definitions and API route contracts
- **Schema**: Drizzle schema in `shared/schema.ts` defines `contactMessages` and `reviews` tables
- **Routes**: `shared/routes.ts` defines typed API endpoints with Zod validation

### Build System
- Development: `npm run dev` runs Vite dev server with HMR through Express
- Production: `npm run build` bundles client with Vite and server with esbuild

## External Dependencies

### Frontend Libraries
- **TanStack React Query**: Data fetching and caching
- **Framer Motion**: Animation library
- **i18next**: Internationalization with English and Arabic translations
- **Radix UI**: Accessible UI primitives via shadcn/ui

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server-side bundling for production
- **drizzle-kit**: Database migration and schema push tooling

