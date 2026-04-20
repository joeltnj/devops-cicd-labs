# ============================================================
# DOCKERFILE — Application Node.js
# Multi-stage : étape build séparée de l'étape run
# Analogie : on construit dans un atelier, on livre dans une boîte propre
# ============================================================

# ── Stage 1 : Build + Test ───────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances en premier
# (optimisation cache Docker : ne re-télécharge que si package.json change)
COPY package*.json ./
RUN npm ci

# Copier le reste du code
COPY . .

# Lancer les tests dans le build — si ça casse, l'image ne se crée pas
RUN npm test

# ── Stage 2 : Image de production ────────────────────────────
FROM node:20-alpine AS production

WORKDIR /app

# Copier uniquement ce qui est nécessaire depuis le builder
# node_modules de prod seulement (pas les devDependencies)
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/app.js ./

# User non-root pour la sécurité (bonne pratique enterprise)
USER node

# L'app n'a pas de serveur HTTP ici — on va en ajouter un
CMD ["node", "-e", "const a=require('./app'); console.log('add(2,3)=',a.add(2,3))"]