# Operativa `n8n` + `UiPath`

Documento actualizado: 2026-04-02

Guia corta de operacion para el acceso administrativo a `n8n` y para el uso de
webhooks desde `UiPath`.

## Estado actual

- UI de `n8n`: `https://api.trazev.com/n8n/`
- Webhooks de `n8n`: `https://api.trazev.com/webhook/`
- Sin subdominio propio de `n8n`
- La UI esta protegida por:
  - allowlist de IP en `nginx`
  - login propio de `n8n`
- Usuario operativo actual:
  - `rbzcustom@gmail.com`
- La contrasena operativa se gestiona fuera de este repositorio
- La IP legacy no se usa para administracion:
  - `http://IP_DEL_VPS/n8n/` -> bloqueado
- `api.rebaaidigital.com` queda solo como redirect legacy hacia `api.trazev.com`

## Como entrar a `n8n`

1. Entra en:
   - `https://api.trazev.com/n8n/`
2. Si tu IP esta permitida, veras el login propio de `n8n`.
3. Si las credenciales son correctas, entraras a la UI.

Acceso recomendado:

- guarda como marcador unico `https://api.trazev.com/n8n/`
- no uses marcadores viejos de `api.rebaaidigital.com`
- entra siempre por esa URL, no por rutas internas de `n8n`

Comportamiento esperado:

- desde IP no permitida -> `403 Forbidden`
- desde IP permitida -> formulario de login de `n8n`
- desde IP permitida con credenciales validas -> acceso correcto
- si el dominio legacy aparece en historico o marcadores, usar siempre `https://api.trazev.com/n8n/`

Si la UI se queda cargando o ves comportamiento raro:

- cierra todas las pestanas abiertas de `api.trazev.com`
- abre una ventana de incognito
- vuelve a entrar en `https://api.trazev.com/n8n/`
- si sigue igual, revisa esta checklist antes de tocar nada del servidor

## Como cambiar la IP permitida

La allowlist no se gestiona desde Hetzner Firewall. Se gestiona en `nginx`.

Fichero:

- `deploy/n8n-allowed-ips.conf`

Formato:

```nginx
allow TU_IP_PUBLICA;
deny all;
```

Pasos:

1. Editar `deploy/n8n-allowed-ips.conf`
2. Sustituir la IP anterior por la nueva IP publica
3. Recrear `nginx`

Comando:

```bash
cd /opt/bopa/BOPA_scraper
docker compose --env-file deploy/.env.production -f deploy/docker-compose.prod.yml up -d --force-recreate nginx
```

## Como debe usarlo `UiPath`

`UiPath` no debe usar la UI de `n8n`.

Debe usar la `Production URL` exacta del nodo `Webhook` publicado en `n8n`.

Regla practica:

- bien: `https://api.trazev.com/webhook/...ruta-real-del-workflow...`
- mal: usar solo la raiz `https://api.trazev.com/webhook/` sin el path completo
- mal: usar la IP publica como endpoint de integracion

## Como sacar la URL correcta para `UiPath`

1. Entrar en `https://api.trazev.com/n8n/`
2. Abrir el workflow correspondiente
3. Ir al nodo `Webhook`
4. Copiar la `Production URL`
5. Pegar esa URL exacta en `UiPath`

Importante:

- la `Test URL` no es para produccion
- el workflow debe estar publicado o activo para que la `Production URL` funcione

## Variables de entorno relevantes

En produccion, `n8n` queda alineado con proxy HTTPS mediante:

```env
WEBHOOK_URL=https://api.trazev.com/
N8N_EDITOR_BASE_URL=https://api.trazev.com/n8n/
N8N_HOST=api.trazev.com
N8N_PROTOCOL=https
N8N_PROXY_HOPS=1
N8N_SECURE_COOKIE=true
N8N_PATH=/n8n/
```

## Comprobaciones rapidas

```bash
curl -I https://api.trazev.com/n8n/
curl -I https://api.trazev.com/webhook/no-existe
curl -I http://IP_DEL_VPS/n8n/
```

Resultados esperados:

- `/n8n/` desde IP no permitida -> `403`
- `/n8n/` desde IP permitida -> `200` y carga de la app/login
- `/webhook/no-existe` -> `404` JSON tecnico
- `/n8n/` por IP publica -> bloqueado

## Referencias

- [DEPLOY_HETZNER_REBAAIDIGITAL.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/DEPLOY_HETZNER_REBAAIDIGITAL.md)
- [README.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/README.md)
