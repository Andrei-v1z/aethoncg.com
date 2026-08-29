# Run after: gh auth login
# Repo: Andrei-v1z/aethoncg.com

param(
    [Parameter(Mandatory = $true)]
    [string]$IonosSshHost,

    [string]$Repo = "Andrei-v1z/aethoncg.com"
)

Write-Host "Setting GitHub secrets for IONOS deploy..." -ForegroundColor Cyan

$ionosSshPassword = Read-Host "IONOS SFTP password (su1846070)" -AsSecureString
$ionosSshPasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($ionosSshPassword)
)

$dbPassword = Read-Host "MariaDB password (dbu2466973)" -AsSecureString
$dbPasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($dbPassword)
)

$googleSecret = Read-Host "Google OAuth client secret" -AsSecureString
$googleSecretPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($googleSecret)
)

gh secret set IONOS_SSH_HOST --body $IonosSshHost -R $Repo
gh secret set IONOS_SSH_USERNAME --body "su1846070" -R $Repo
gh secret set IONOS_SSH_PASSWORD --body $ionosSshPasswordPlain -R $Repo
gh secret set IONOS_SSH_PATH --body "/" -R $Repo

gh secret set DB_DATABASE --body "dbu2466973" -R $Repo
gh secret set DB_USERNAME --body "dbu2466973" -R $Repo
gh secret set DB_PASSWORD --body $dbPasswordPlain -R $Repo

gh secret set APP_KEY --body (php artisan key:generate --show) -R $Repo
gh secret set GOOGLE_CLIENT_ID --body "423287146146-opptu0vdltdmn7jhgrpsb7kleh2bf92u.apps.googleusercontent.com" -R $Repo
gh secret set GOOGLE_CLIENT_SECRET --body $googleSecretPlain -R $Repo

Write-Host "Secrets configured. Push to main or run the deploy workflow." -ForegroundColor Green
