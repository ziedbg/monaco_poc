# Utiliser une image de base Node.js
FROM node:20.10.0-alpine as base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Ajouter un utilisateur non-root
RUN adduser -D myuser
RUN chown -R myuser /app
USER myuser

# Construire l'application pour l'environnement de développement
FROM base as development
ENV NODE_ENV=development
COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

# Construire l'application pour l'environnement de production
FROM base as production
ENV NODE_ENV=production
COPY . .
RUN ng build --prod

# Utiliser un serveur HTTP pour servir l'application construite
FROM nginx:alpine as production-stage
COPY --from=production /app/dist/monaco-poc /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
