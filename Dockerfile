# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install


# Copy the entire project directory to the working directory
COPY . .
RUN npm install -g
