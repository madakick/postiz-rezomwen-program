# Rézomwen program

Fork de [Postiz](https://github.com/gitroomhq/postiz-app) (AGPL-3.0) personnalisé
pour [RézoMwen](https://rezomwen.fr) : planification des publications sur les
réseaux sociaux, ouverte depuis le menu « Planification » de l'espace créateur
RézoMwen (offre la plus chère) et servie sur https://program.rezomwen.fr.

Base : `gitroomhq/postiz-app` commit `91c91f6`. Les modifications vivent sur la
branche `rezomwen`, rebasable sur `main` amont (`git remote add upstream
https://github.com/gitroomhq/postiz-app.git`). Licence inchangée : AGPL-3.0
(voir `LICENSE`) ; le code source de ce service est celui de ce dépôt.

## Modifications

- **Marque** : nom « Rézomwen program » (`libraries/helpers/src/utils/app.name.ts`,
  titres des pages, textes et traductions — les noms d'outils techniques
  « Postiz CLI / API / MCP / extension » sont gardés) ; logos et favicons
  (`apps/frontend/public/`, `components/new-layout/logo.tsx`,
  `components/ui/logo-text.component.tsx`) ; présentation de la page de connexion
  (`app/(app)/auth/layout.tsx`) ; liens CGV et confidentialité vers rezomwen.fr ;
  e-mails visibles.
- **Couleurs et police** : charte RézoMwen (bleu-vert `#013847` / `#156177`, vert
  citron `#d8ef2c`) à la place du violet et du rose ; Plus Jakarta Sans servie en
  local (`app/fonts/`, `next/font/local`), plus de Google Fonts.
- **Français par défaut** (`fallbackLng = 'fr'`).
- **Connexion par RézoMwen seule** quand `POSTIZ_GENERIC_OAUTH` est défini :
  - page de connexion réduite au bouton « Se connecter avec RézoMwen »
    (`components/auth/login.tsx`), lancé sans clic quand l'adresse porte
    `?sso=1` (lien du menu Planification) ;
  - pas de formulaire local, d'inscription ni de mot de passe oublié ; après le
    retour de RézoMwen, seul le nom de l'organisation est demandé à la première
    entrée (`components/auth/register.tsx`) ;
  - comptes locaux refusés côté serveur (`apps/backend/src/services/auth/auth.service.ts`),
    sauf `ALLOW_LOCAL_AUTH=true` (secours).
- **Image Docker** : `.github/workflows/build-rezomwen.yml` (push sur `rezomwen`
  ou lancement manuel, amd64) → `ghcr.io/madakick/postiz-rezomwen-program:latest`.
  Les workflows hérités de Postiz sont désactivés dans ce dépôt (pas supprimés).

## Configuration (VPS)

Variables à ajouter ou modifier dans l'environnement du conteneur (fichier
`.env` ou `docker-compose.yml` de `/opt/postiz-app`) :

```env
IS_GENERAL=true
POSTIZ_GENERIC_OAUTH=true
POSTIZ_OAUTH_AUTH_URL=https://rezomwen.fr/api/sso/authorize.php
POSTIZ_OAUTH_TOKEN_URL=https://rezomwen.fr/api/sso/token.php
POSTIZ_OAUTH_USERINFO_URL=https://rezomwen.fr/api/sso/userinfo.php
POSTIZ_OAUTH_CLIENT_ID=rezomwen-program
POSTIZ_OAUTH_CLIENT_SECRET=<secret du client, fichier program.txt — jamais dans ce dépôt>
NEXT_PUBLIC_POSTIZ_OAUTH_DISPLAY_NAME=RézoMwen
NEXT_PUBLIC_POSTIZ_OAUTH_LOGO_URL=/logo-rezomwen.svg
DISABLE_REGISTRATION=true
NEXT_PUBLIC_DISCORD_SUPPORT=
EMAIL_FROM_NAME=Rézomwen program
FRONTEND_URL=https://program.rezomwen.fr
NEXT_PUBLIC_BACKEND_URL=https://program.rezomwen.fr/api
MAIN_URL=https://program.rezomwen.fr
```

Image : `ghcr.io/madakick/postiz-rezomwen-program:latest` à la place de
`ghcr.io/gitroomhq/postiz-app:latest`, puis
`docker compose pull && docker compose up -d`. Le conteneur écoute sur 5000
(nginx interne), exposé en `4007:5000` ; `/api/` → backend 3000, `/` → frontend
4200.

Côté RézoMwen, le client `rezomwen-program` (table `sso_clients`) déclare
l'adresse de retour `https://program.rezomwen.fr/settings` ; le compte doit
détenir l'offre la plus chère.
