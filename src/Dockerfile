# Stage 1: Build Angular app using lightweight Node
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/YOUR_PROJECT_NAME /usr/share/nginx/html
