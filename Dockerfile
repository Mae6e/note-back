FROM node:22-alpine AS build

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/pnpm-lock.yaml ./

RUN pnpm install --prod

EXPOSE 3001

CMD ["node", "dist/main"]
