FROM node:latest

# Create api as current  working directory to execute all the docker instruction there 
WORKDIR /api
# Copy the source code to  /api directory
COPY . .
# install all required dependencies
RUN npm install
# expose the container port for outside to access application
EXPOSE 8080
CMD [ "node", "index.js" ]