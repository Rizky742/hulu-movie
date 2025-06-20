# Stage 1: Build React app
FROM node:16 as build

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Serve with a lightweight HTTP server
FROM node:16-slim

# install 'serve'
RUN npm install -g serve

WORKDIR /app
COPY --from=build /app/build .

EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]
