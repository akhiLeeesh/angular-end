# Use a lightweight Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /backend

# Copy dependency definitions first for caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy all source files
COPY . .

# Expose the port your Node.js app runs on
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
