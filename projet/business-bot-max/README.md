# BUSINESS BOT MAX — prototype local v0.1

## Ce qui est livré
- Application web progressive légère en français (`app/`), utilisable dans un navigateur Android moderne.
- Suivi financier local : entrées, sorties, solde net et historique, départ à 0 €.
- Chiffrement AES-GCM du fichier de données avec clé dérivée du code via PBKDF2 (250 000 itérations).
- Sauvegarde/restauration chiffrée et export CSV des opérations.
- Tâches locales pour développement, contrôle qualité et préparation business. Ce sont des scripts déterministes, pas une IA.
- Liste de projets/produits.
- Kit numérique de démarrage dans `product/`. Piste de vente vérifiée : Ko-fi Shop, sans abonnement fixe ni frais de mise en ligne, mais 5 % de frais Ko-fi sur les ventes + frais du processeur de paiement; compte PayPal ou Stripe nécessaire, obligations fiscales à la charge du vendeur.

## Limites honnêtes
- **Pas d'APK compilée** : cet environnement ne dispose pas d'Android SDK/Gradle ni d'un outil de packaging Android vérifié. Le dossier `app/` est la version web installable potentiellement via navigateur, pas une APK.
- Le premier code est demandé lors de l'initialisation. Les données sont chiffrées côté navigateur, mais la protection dépend du code choisi et du navigateur/appareil. Le stockage peut être effacé par Android ou le navigateur : exporte régulièrement une sauvegarde.
- Aucune vente, connexion bancaire, transaction réelle, synchronisation cloud ou IA distante n'est intégrée.
- Une page HTML ouverte directement depuis `file://` peut ne pas autoriser Web Crypto selon le navigateur. Servez le dossier depuis `localhost` ou un hébergement HTTPS pour un contexte sécurisé.

## Utilisation locale (sur un environnement avec Node.js)
Dans le dossier `app`, exécuter `node ../serve.mjs` depuis la racine du projet, puis ouvrir `http://127.0.0.1:4173` sur le même appareil. Sur Android, il faut lancer le processus local et le laisser actif pendant l'utilisation.

## Tests
Lancez `node tests/core.test.mjs` depuis la racine. Ces tests couvrent des calculs de solde et la validation des limites; ils ne constituent pas un test complet de navigateur ou Android.
