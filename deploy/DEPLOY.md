# Deploy Aethon to IONOS

Deployments run automatically via GitHub Actions on every push to `main`.

Repo: [github.com/Andrei-v1z/aethoncg.com](https://github.com/Andrei-v1z/aethoncg.com)

## Database (MariaDB)

| Setting  | Value |
|----------|-------|
| Host     | `db5021301145.hosting-data.io` |
| Port     | `3306` |
| Username | `dbu2466973` |
| Database | `dbu2466973` (typical IONOS default; confirm in phpMyAdmin) |
| Type     | MariaDB 11.8 |

## Required GitHub Secrets

Set these in **Settings → Secrets and variables → Actions** on the repo.

### Application

| Secret | Description |
|--------|-------------|
| `APP_KEY` | Laravel app key (`php artisan key:generate --show`) |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

### Database

| Secret | Value |
|--------|-------|
| `DB_DATABASE` | `dbu2466973` |
| `DB_USERNAME` | `dbu2466973` |
| `DB_PASSWORD` | Your IONOS database password |

### IONOS FTP / FTPS

| Secret | Description |
|--------|-------------|
| `IONOS_FTP_HOST` | FTP server from IONOS (e.g. `access-xxxxx.webspace-host.com`) |
| `IONOS_FTP_USERNAME` | FTP username |
| `IONOS_FTP_PASSWORD` | FTP password |
| `IONOS_FTP_SERVER_DIR` | Remote webspace path (often `/` or leave as `/`) |
| `IONOS_FTP_PORT` | Optional, default `21` |

### IONOS SSH (post-deploy migrations)

| Secret | Description |
|--------|-------------|
| `IONOS_SSH_HOST` | SSH hostname from IONOS |
| `IONOS_SSH_USERNAME` | SSH username |
| `IONOS_SSH_PASSWORD` | SSH password |
| `IONOS_SSH_PATH` | Full path to site on server (e.g. `/kunden/.../webseiten/aethoncg.com`) |
| `IONOS_SSH_PORT` | Optional, default `22` |

## Manual deploy trigger

Go to **Actions → Deploy to IONOS → Run workflow**.

## IONOS panel settings

1. Connect **aethoncg.com** to your webspace.
2. Set document root to the Laravel `public/` folder, or use the root `.htaccess`.
3. Set PHP to **8.2 or higher**.
4. In Google Cloud Console, add: `https://aethoncg.com/auth/google/callback`

## Post-deploy checks

- Homepage loads at `https://aethoncg.com`
- Login, register, and Google sign-in work
- Database tables exist (`users`, `sessions`, `cache`, etc.)
