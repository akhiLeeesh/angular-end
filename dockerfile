# Step 1: Build Angular App
FROM node:20 AS builder

WORKDIR /app

# Copy both frontend and backend into the container
COPY . .

# Install frontend dependencies and build Angular
WORKDIR /app/frontend
RUN npm install
RUN npm run build --prod

# Step 2: Set up Express server
FROM node:20

WORKDIR /app

# Copy only the backend code and built Angular files from previous stage
COPY --from=builder /app/backend ./backend
COPY --from=builder /app/frontend/dist ./dist

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Set the environment port (optional)
ENV PORT=5000

# Start the server
CMD ["node", "index.js"]
