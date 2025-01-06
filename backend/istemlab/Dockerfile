# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Install dependencies using npm ci (make sure package-lock.json exists)
RUN npm ci --prefer-offline --no-audit

# Copy the rest of your application code to the container
COPY . .

# Expose the port your app runs on (if applicable)
EXPOSE 5000

# Define the command to run your application (adjust as necessary)
CMD ["npm", "start"]
