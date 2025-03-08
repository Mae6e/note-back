FROM node:22-alpine AS build

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/pnpm-lock.yaml ./
COPY --from=build /app/package.json ./
COPY .env .env

RUN pnpm install  --prod

EXPOSE 3001

CMD ["pnpm", "run", "start"]
