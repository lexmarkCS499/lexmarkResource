FROM node:14

# Set working directory in the container
WORKDIR /src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["node", "src/app.js"]