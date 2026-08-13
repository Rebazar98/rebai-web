# TRAZEV Web

Web comercial y panel operativo de TRAZEV, construido con Next.js 16.

La aplicacion cubre dos frentes:

- captacion comercial para los servicios de TRAZEV
- panel cliente BOPA en `/panel` y panel admin en `/panel/admin`

## Estado actual

Estado actualizado: 2026-04-02

- Dominio canonico: `https://trazev.com`
- API BOPA operativa en `https://api.trazev.com`
- HTTPS real activo en web y API
- renovacion SSL automatica configurada en el VPS
- `n8n` no se publica con subdominio propio en la topologia actual
- interfaz de `n8n` servida en `https://api.trazev.com/n8n/`, protegida por IP permitida + login propio de `n8n`
- webhooks de `n8n` servidos en `https://api.trazev.com/webhook/`
- usuario operativo actual de `n8n`: `rbzcustom@gmail.com`
- la contrasena operativa de `n8n` se gestiona fuera del repositorio
- Resend configurado para enviar desde `noreply@send.trazev.com`
- `Reply-To` transaccional configurado hacia `info@trazev.com`
- Catalogo multi-servicio implementado con fuente unica en `src/lib/constants.ts`
- Pipeline de leads unificado para formulario, CTAs y `POST /api/lead`
- `rebaaidigital.com` y `www.rebaaidigital.com` redirigen a `https://trazev.com`
- `api.rebaaidigital.com` redirige a `https://api.trazev.com`

## Posicionamiento actual

TRAZEV se presenta en la web como una empresa de automatizacion administrativa con IA
para ayuntamientos, asesorias tecnicas, ingenierias y entidades vinculadas al territorio.

La home ya no se comunica como una landing monoproducto ni como un "proyecto" en fase
de idea. El enfoque actual es comercial y operativo:

- que problemas administrativos resuelve TRAZEV
- para que tipo de organizaciones encaja
- que servicios puede implantar hoy
- como se reparten `BOPA Inteligente`, `Automatizaciones a medida` y `Asesoria en automatizacion e IA`

El catalogo visible hoy es:

- `BOPA Inteligente`
- `Automatizaciones a medida`
- `Asesoria en automatizacion e IA`

## Estructura comercial de la home

La parte superior de la home esta organizada asi:

1. `Hero` corporativo orientado a captacion
2. `TrustStrip` con mensajes de contexto y credibilidad
3. `CapabilitiesShowcase` con oferta de servicios y clientes objetivo
4. `BopaSpotlight` como bloque especifico de `BOPA Inteligente`

La idea de producto que se comunica hoy es:

- TRAZEV vende implantacion y automatizacion real
- la web evita lenguaje de "startup", "piloto" o promesas no demostradas
- no se muestran clientes ficticios ni claims de contratacion no verificables

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Route Handlers y Server Actions
- Docker standalone para produccion

## Estructura funcional

### Marketing

- `/` home comercial
- `/servicios` listado de servicios
- `/servicios/[slug]` detalle dinamico de cada servicio
- `/contacto` contacto contextual por servicio, tipo y tier
- `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies`

### Producto / operacion

- `/panel` panel cliente BOPA
- `/panel/admin` control plane operativo
- `/api/lead` entrada valida para integraciones de leads
- `/api/chat` proxy al chat del backend BOPA
- `/api/auth/*` y `/api/admin/auth/*` autenticacion del panel

## Modelo multi-servicio

La web no depende de paginas estaticas por servicio. La fuente unica esta en:

- `src/lib/constants.ts`

Desde `SERVICES` se generan:

- listado de servicios
- paginas dinamicas `/servicios/[slug]`
- opciones del formulario de contacto
- sitemap
- CTAs contextuales

Para anadir un servicio nuevo, el criterio actual es:

1. anadir el servicio en `SERVICES`
2. ajustar copy o assets si hace falta
3. no crear nuevas rutas manualmente salvo necesidad especial

## Pipeline de leads

La logica comun esta en:

- `src/lib/contact.ts`
- `src/lib/leads.ts`

Campos normalizados del lead:

- `serviceSlug`
- `leadType`
- `pricingTier`
- `sourcePage`
- `sourceSection`
- `nombre`
- `empresa`
- `email`
- `telefono`
- `challenge`
- `currentBopaSituation`
- `createdAt`

Canales de entrega:

- `n8n` mediante `N8N_WEBHOOK_URL` cuando se configure un webhook real
- `Resend` mediante `RESEND_API_KEY`

Politica actual:

- se intentan ambos canales
- el lead se considera correcto si al menos uno funciona
- el usuario solo ve error si fallan ambos

## Query params soportados

La pagina `/contacto` soporta:

- `servicio=<slug|general>`
- `tipo=<demo|contacto>`
- `tier=<basico|profesional|empresa>`

Compatibilidad:

- las URLs antiguas con `tipo` y `tier` siguen funcionando
- si falta `servicio`, contacto general usa `general`
- las demos BOPA usan `bopa` como contexto por defecto

## Variables de entorno

Variables usadas por la aplicacion:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CALENDLY_URL`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_REPLY_TO_EMAIL`
- `LEAD_NOTIFICATION_EMAIL`
- `N8N_WEBHOOK_URL`
- `BOPA_API_URL`
- `JWT_SECRET`

Referencia de produccion:

- [`.env.production.example`](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/.env.production.example)

## Desarrollo local

```bash
npm install
npm run dev
```

Checks principales:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Despliegue

Referencia actual de despliegue para Hetzner:

- [DEPLOY_HETZNER_REBAAIDIGITAL.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/DEPLOY_HETZNER_REBAAIDIGITAL.md)

Puntos importantes:

- la web publica y el panel comparten `trazev.com`
- nginx publica el root domain hacia el contenedor Next.js
- `api.trazev.com` se sirve en subdominio propio con HTTPS
- `n8n` no se expone en subdominio publico en la configuracion actual
- la UI de `n8n` se controla por `nginx` con allowlist de IP, no desde Hetzner Firewall
- la renovacion de certificados se ejecuta de forma automatica en el VPS
- el `Dockerfile` usa salida `standalone`

## Acceso actual a `n8n`

Referencia operativa vigente:

- UI: `https://api.trazev.com/n8n/`
- usuario: `rbzcustom@gmail.com`
- autenticacion: IP permitida + login propio de `n8n`
- contrasena: gestionada fuera del repositorio

Importante:

- no usar ya `api.rebaaidigital.com/n8n/` como URL de trabajo
- el dominio legacy solo se mantiene como redirect temporal

## Archivos clave

- `src/lib/constants.ts`: configuracion central del sitio y servicios
- `src/lib/contact.ts`: helpers de contacto y CTAs
- `src/lib/leads.ts`: normalizacion y entrega de leads
- `src/app/(marketing)/contacto/page.tsx`: contacto contextual
- `src/components/shared/contact-form.tsx`: formulario principal
- `src/app/(marketing)/servicios/[slug]/page.tsx`: pagina dinamica de servicio
- `src/proxy.ts`: proteccion de `/panel`

## Jerarquia de documentacion

Documento que manda en cada tema:

- `README.md`: estado actual del producto, posicionamiento de la web y arquitectura funcional
- `DEPLOY_HETZNER_REBAAIDIGITAL.md`: despliegue e infraestructura vigente, aunque el nombre del archivo sea legacy
- `PLAN_LANZAMIENTO_BOPA.txt`: documento comercial de captacion centrado en BOPA

Importante:

- `PLAN_LANZAMIENTO_BOPA.txt` no es la fuente de verdad para el posicionamiento actual de toda la web
- puede contener ideas de marketing validas para BOPA, pero no define la arquitectura ni la narrativa corporativa actual de `TRAZEV`

## Documentacion relacionada

- [DEPLOY_HETZNER_REBAAIDIGITAL.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/DEPLOY_HETZNER_REBAAIDIGITAL.md)
- [CHECKLIST_N8N_HOY.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/CHECKLIST_N8N_HOY.md)
- [GUIA_RAPIDA_N8N_UIPATH.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/GUIA_RAPIDA_N8N_UIPATH.md)
- [OPERATIVA_N8N_UIPATH.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/OPERATIVA_N8N_UIPATH.md)
- [PLAN_LANZAMIENTO_BOPA.txt](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/PLAN_LANZAMIENTO_BOPA.txt)
