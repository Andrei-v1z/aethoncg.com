# Deploy Aethon to IONOS

## Server path

Project lives at `/Aethon/` on the webspace.

## Manual upload

1. Upload to `/Aethon/` (not webspace root).
2. Connect **aethoncg.com** in IONOS and set document root to `/Aethon/public`.
3. Assign the MariaDB database to this webspace in IONOS (Hosting → Databases).
4. Via SSH:
   ```bash
   cd /Aethon
   php artisan migrate --force
   php artisan config:cache
   chmod -R 775 storage bootstrap/cache
   ```

## GitHub Actions (later)

Auto-deploy on push to `main` is enabled. You can also run manually: **Actions → Deploy to IONOS → Run workflow**.

Deploys to `/Aethon/` only.

## Credentials

| Service | Host | User |
|---------|------|------|
| SFTP/SSH | `access-5019302200.webspace-host.com` | `su1846070` |
| MariaDB | `db5021301145.hosting-data.io` | `dbu2466973` / `dbs16067497` |

Do not deploy to webspace root `/` — other sites live there (BrightPixel, RSPM, etc.).
