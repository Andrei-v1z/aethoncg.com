# Deploy Aethon to IONOS

## Manual upload (recommended first time)

1. Upload the project to `/aethoncg.com/` on your IONOS webspace (not webspace root).
2. In IONOS, connect **aethoncg.com** and set document root to `/aethoncg.com/public`.
3. Create `.env` on the server from `deploy/ionos.env.example`.
4. Via SSH:
   ```bash
   cd /aethoncg.com
   composer install --no-dev --optimize-autoloader
   php artisan key:generate
   php artisan migrate --force
   php artisan config:cache
   chmod -R 775 storage bootstrap/cache
   ```

## GitHub Actions (later)

Auto-deploy on push is **disabled**. Run manually: **Actions → Deploy to IONOS → Run workflow**.

Deploys to `/aethoncg.com/` only. Does not upload `vendor/` — runs `composer install` on the server via SSH.

## Credentials

| Service | Host | User |
|---------|------|------|
| SFTP/SSH | `access-5019302200.webspace-host.com` | `su1846070` |
| MariaDB | `db5021301145.hosting-data.io` | `dbu2466973` |

Do not deploy to webspace root `/` — other sites live there (BrightPixel, RSPM, etc.).
