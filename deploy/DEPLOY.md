# Deploy Aethon to IONOS

Deployments run automatically via GitHub Actions on every push to `main`.

## Database (MariaDB)

| Setting  | Value |
|----------|-------|
| Host     | `db5021301145.hosting-data.io` |
| Port     | `3306` |
| Username | `dbu2466973` |
| Database | `dbu2466973` |

## SFTP / SSH (IONOS)

| Setting  | Value |
|----------|-------|
| Host     | `access-5019302200.webspace-host.com` |
| Username | `su1846070` |
| Protocol | SFTP + SSH |
| Port     | `22` |
| Directory| `/` |

## Set GitHub Secrets

### Quick setup (PowerShell)

```powershell
gh auth login
.\deploy\setup-github-secrets.ps1
```

You will be prompted for passwords (never commit these to git).

### Required secrets

| Secret | Value |
|--------|-------|
| `IONOS_SSH_PASSWORD` | Your SFTP password |
| `DB_DATABASE` | `dbu2466973` |
| `DB_USERNAME` | `dbu2466973` |
| `DB_PASSWORD` | Your MariaDB password |
| `APP_KEY` | `php artisan key:generate --show` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

## Trigger deploy

Push to `main`, or go to **Actions → Deploy to IONOS → Run workflow**.

## IONOS panel

1. Connect **aethoncg.com** to your webspace.
2. Set document root to Laravel `public/`, or use the root `.htaccess`.
3. Set PHP to **8.2+**.
4. Add Google redirect URI: `https://aethoncg.com/auth/google/callback`
