# Use a specific Node.js version as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /oyetayo_timothy_ui_garden

# Copy the package.json and package-lock.json files first
# This allows Docker to cache the npm install step if these files haven't changed
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port that Storybook will run on
EXPOSE 6006

# Start Storybook
CMD ["npm", "run", "storybook"]
