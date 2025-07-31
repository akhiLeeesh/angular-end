# Step 1: Build the Angular app using Node.js
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built app to Nginx HTML folder
COPY --from=build /app/dist/ /usr/share/nginx/html

# Copy custom nginx config if you have one (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
