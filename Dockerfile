FROM node:20-alpine

WORKDIR /app

# Instala dependencias (incluye devDeps para el build)
COPY package.json ./
RUN npm install

# Copia el código fuente y construye
COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/server.cjs"]
