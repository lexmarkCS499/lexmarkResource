# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install the app dependencies inside the container
RUN npm install

# Copy the rest of the application files to the container
COPY .. .

# Expose the port on which your app will run (make sure it matches the one used in app.js)
EXPOSE 8082

# Define the command to start the app
CMD ["node", "src/app.js"]
