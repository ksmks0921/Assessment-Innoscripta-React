# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the React app
RUN npm run build

# Expose the container port
EXPOSE 5173

# Start the React app
CMD ["npm", "run", "start"]