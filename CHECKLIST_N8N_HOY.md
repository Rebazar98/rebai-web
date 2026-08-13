# Checklist `n8n` hoy

Documento actualizado: 2026-04-02

Si hoy no puedes entrar a `n8n` o un webhook no responde, revisa esto en este
orden.

## 1. La URL correcta

- UI: `https://api.trazev.com/n8n/`
- Webhooks: `https://api.trazev.com/webhook/...`

No uses ya:

- `https://api.rebaaidigital.com/n8n/`
- la IP publica del VPS
- marcadores antiguos del dominio legacy
- rutas internas antiguas del navegador

## 2. El acceso correcto

Usuario operativo actual:

- `rbzcustom@gmail.com`

La contrasena operativa no se guarda en este repositorio.

Comportamiento esperado:

- `403` si tu IP no esta permitida
- carga del login de `n8n` si tu IP esta permitida
- acceso correcto si las credenciales de `n8n` son validas

Accion recomendada:

- usa siempre como marcador `https://api.trazev.com/n8n/`
- si ves comportamiento raro, prueba primero en incognito

## 3. Si ves `403`

Revisa:

- `deploy/n8n-allowed-ips.conf`

Formato:

```nginx
allow TU_IP_PUBLICA;
deny all;
```

Despues recrea `nginx`:

```bash
cd /opt/bopa/BOPA_scraper
docker compose --env-file deploy/.env.production -f deploy/docker-compose.prod.yml up -d --force-recreate nginx
```

## 4. Si un webhook falla

No uses la raiz:

- mal: `https://api.trazev.com/webhook/`

Usa siempre la `Production URL` exacta del nodo `Webhook` del workflow.

## 5. Comprobaciones rapidas

```bash
curl -I https://api.trazev.com/n8n/
curl -I https://api.trazev.com/webhook/no-existe
curl -I http://IP_DEL_VPS/n8n/
```

Interpretacion:

- `/n8n/` -> `403` si la IP no esta permitida, o `200` si la app puede cargar
- `/webhook/no-existe` -> `404`
- `/n8n/` por IP publica -> bloqueado

## 6. Si sigue fallando

Revisa contenedores:

```bash
cd /opt/bopa/BOPA_scraper
docker compose --env-file deploy/.env.production -f deploy/docker-compose.prod.yml ps
```

Revisa logs:

```bash
cd /opt/bopa/BOPA_scraper
docker compose --env-file deploy/.env.production -f deploy/docker-compose.prod.yml logs --no-color --tail 120 nginx n8n bopa_api
```

## 7. Documentacion de apoyo

- [GUIA_RAPIDA_N8N_UIPATH.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/GUIA_RAPIDA_N8N_UIPATH.md)
- [OPERATIVA_N8N_UIPATH.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/OPERATIVA_N8N_UIPATH.md)
- [DEPLOY_HETZNER_REBAAIDIGITAL.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/DEPLOY_HETZNER_REBAAIDIGITAL.md)
