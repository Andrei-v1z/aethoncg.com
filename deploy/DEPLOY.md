# Deploy Aethon to IONOS Shared Hosting

## 1. Database (MariaDB)

After IONOS finishes provisioning, copy these from the IONOS database panel:

- Hostname
- Database name
- Username
- Password
- Port (usually `3306`)

Create `.env` on the server from `deploy/ionos.env.example` and fill in the database values.

Generate an app key locally or on the server:

```bash
php artisan key:generate --show
```

## 2. Upload the site

### Option A: Git (if SSH is enabled on IONOS)

```bash
cd /path/to/webspace
git clone https://github.com/Andrei-v1z/aethoncg.com.git .
composer install --no-dev --optimize-autoloader
cp deploy/ionos.env.example .env
# edit .env with your database credentials and APP_KEY
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
chmod -R 775 storage bootstrap/cache
```

### Option B: FTP/SFTP

Upload the full project to your webspace root, excluding:

- `node_modules/`
- `.git/`
- local `.env`

Include `public/build/` (production assets are committed for shared hosting).

## 3. Document root

In IONOS, set the domain document root to the Laravel `public/` folder.

If that is not available, keep the root `.htaccess` in the project root. It forwards requests to `public/`.

## 4. PHP version

Set PHP to **8.2 or higher** in the IONOS control panel.

## 5. Google OAuth (production)

In Google Cloud Console, add this authorized redirect URI:

```
https://aethoncg.com/auth/google/callback
```

Update `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `APP_URL` in production `.env`.

## 6. Post-deploy checks

- Homepage loads at `https://aethoncg.com`
- Login and register work
- Google sign-in redirects correctly
- Database tables exist (`users`, `sessions`, etc.)
