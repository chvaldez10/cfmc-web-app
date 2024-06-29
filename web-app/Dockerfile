# Use the Node.js 20-alpine image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies using npm
RUN npm install --prefer-offline --no-audit --progress=false

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the Next.js app in development mode
CMD ["npm", "run", "dev"]
