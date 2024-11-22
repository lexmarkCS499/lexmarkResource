# Step 1: Use an official Node.js image to build the app
FROM node:18 AS build

# Step 2: Set working directory inside the container
WORKDIR /client

# Step 3: Copy package.json and package-lock.json to the container
COPY /client/package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire project to the working directory
COPY client/ ./

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use an official NGINX image to serve the build output
FROM nginx:alpine

# Step 8: Copy the build output to the NGINX web root directory
COPY --from=build /client/build /usr/share/nginx/html

# Step 9: Expose port 80 for the app
EXPOSE 80

# Step 10: Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
