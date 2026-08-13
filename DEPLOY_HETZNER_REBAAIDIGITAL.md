# Despliegue Hetzner de TRAZEV

Documento actualizado: 2026-04-02

El nombre del archivo es legacy, pero el estado real de produccion ya es
`TRAZEV`.

## Estado actual

- web publica: `https://trazev.com`
- API BOPA: `https://api.trazev.com`
- UI de `n8n`: `https://api.trazev.com/n8n/`
- webhooks de `n8n`: `https://api.trazev.com/webhook/`
- `rebaaidigital.com` y `api.rebaaidigital.com` quedan solo como redirect legacy

## Servicios principales

- `panel` -> web comercial + panel cliente
- `bopa_api` -> backend API
- `n8n` -> automatizacion y webhooks
- `nginx` -> proxy, SSL y control de acceso a `n8n`
- `postgres` y `redis` -> soporte de datos

## Reglas de acceso

- `n8n` no usa subdominio propio
- la UI vive en `https://api.trazev.com/n8n/`
- el acceso a la UI de `n8n` exige:
  - IP permitida en `deploy/n8n-allowed-ips.conf`
  - login propio de `n8n`

Usuario operativo actual de `n8n`:

- `rbzcustom@gmail.com`

La contrasena operativa no se guarda en el repositorio.

## Ficheros clave

- `deploy/docker-compose.prod.yml`
- `deploy/nginx.conf`
- `deploy/.env.production`
- `deploy/n8n-allowed-ips.conf`

## URLs importantes

- home: `https://trazev.com`
- contacto: `https://trazev.com/contacto`
- login panel: `https://trazev.com/panel/login`
- UI `n8n`: `https://api.trazev.com/n8n/`
- webhook root tecnico: `https://api.trazev.com/webhook/`

## Cambios tipicos y comando correcto

Si cambias `n8n`, `bopa_api` o variables:

```bash
cd /opt/bopa/BOPA_scraper
docker compose --env-file deploy/.env.production -f deploy/docker-compose.prod.yml up -d --force-recreate bopa_api n8n
```

Si cambias `nginx` o la IP permitida para `n8n`:

```bash
cd /opt/bopa/BOPA_scraper
docker compose --env-file deploy/.env.production -f deploy/docker-compose.prod.yml up -d --force-recreate nginx
```

Si cambias la web o el panel:

```bash
cd /opt/bopa/BOPA_scraper
docker compose --env-file deploy/.env.production -f deploy/docker-compose.prod.yml up --build -d panel
```

## Comprobaciones rapidas

```bash
curl -I https://trazev.com
curl -I https://api.trazev.com/health
curl -I https://api.trazev.com/n8n/
curl -I https://api.trazev.com/webhook/no-existe
```

Esperado:

- `trazev.com` -> `200`
- `api.trazev.com/health` -> respuesta de la API
- `api.trazev.com/n8n/` -> `403` si la IP no esta permitida, o `200` si la app puede cargar
- `api.trazev.com/webhook/no-existe` -> `404`

## Notas operativas

- `UiPath` no debe llamar a la UI de `n8n`
- `UiPath` debe usar siempre la `Production URL` exacta del nodo `Webhook`
- la IP permitida de `n8n` se gestiona en `deploy/n8n-allowed-ips.conf`
- la URL vigente de trabajo para `n8n` es `https://api.trazev.com/n8n/`
- el dominio legacy de `n8n` no debe usarse como acceso principal
- la rotacion de credenciales de `n8n` implica:
  - actualizar la cuenta interna de `n8n`
  - recrear `n8n` si cambias variables del servicio
  - recargar `nginx` solo si cambias la allowlist de IP

## Documentacion relacionada

- [README.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/README.md)
- [CHECKLIST_N8N_HOY.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/CHECKLIST_N8N_HOY.md)
- [GUIA_RAPIDA_N8N_UIPATH.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/GUIA_RAPIDA_N8N_UIPATH.md)
- [OPERATIVA_N8N_UIPATH.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/OPERATIVA_N8N_UIPATH.md)
