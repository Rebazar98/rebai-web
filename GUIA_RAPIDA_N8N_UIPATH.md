# Guia rapida `n8n` + `UiPath`

Documento actualizado: 2026-04-02

Atajo operativo para entrar a `n8n`, cambiar tu IP permitida y sacar la URL
correcta para `UiPath` sin recorrer toda la documentacion larga.

## 1. Entrar en `n8n`

URL:

- `https://api.trazev.com/n8n/`

Marcador recomendado:

- guarda exactamente `https://api.trazev.com/n8n/`

Usuario operativo actual:

- `rbzcustom@gmail.com`

La contrasena operativa se mantiene fuera del repositorio.

Comportamiento esperado:

- desde IP no permitida -> `403`
- desde IP permitida -> carga del login de `n8n`
- desde IP permitida con credenciales validas -> acceso correcto

Si se queda cargando:

- cierra todas las pestanas de `api.trazev.com`
- abre una ventana de incognito
- entra otra vez por la URL anterior
- no uses URLs antiguas ni rutas internas guardadas por el navegador

## 2. Cambiar la IP permitida

Fichero:

- `deploy/n8n-allowed-ips.conf`

Contenido:

```nginx
allow TU_IP_PUBLICA;
deny all;
```

Despues de cambiarla:

```bash
cd /opt/bopa/BOPA_scraper
docker compose --env-file deploy/.env.production -f deploy/docker-compose.prod.yml up -d --force-recreate nginx
```

## 3. Sacar la URL correcta para `UiPath`

1. Entra en `https://api.trazev.com/n8n/`
2. Abre el workflow
3. Abre el nodo `Webhook`
4. Copia la `Production URL`
5. Pega esa URL exacta en `UiPath`

Regla importante:

- bien: `https://api.trazev.com/webhook/...ruta-real...`
- mal: usar solo `https://api.trazev.com/webhook/`
- mal: usar la IP publica del VPS
- mal: seguir entrando por el dominio legacy cuando ya existe `https://api.trazev.com/n8n/`

## 4. Comprobaciones rapidas

```bash
curl -I https://api.trazev.com/n8n/
curl -I https://api.trazev.com/webhook/no-existe
curl -I http://IP_DEL_VPS/n8n/
```

Resultados esperados:

- `/n8n/` -> `403` si tu IP no esta permitida, o `200` si la app puede cargar
- `/webhook/no-existe` -> `404`
- `/n8n/` por IP publica -> bloqueado

## 5. Documentacion completa

- [OPERATIVA_N8N_UIPATH.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/OPERATIVA_N8N_UIPATH.md)
- [DEPLOY_HETZNER_REBAAIDIGITAL.md](/C:/Users/user/OneDrive/Desktop/RebaAI%20Web/rebai-web/DEPLOY_HETZNER_REBAAIDIGITAL.md)
