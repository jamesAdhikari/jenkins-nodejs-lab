  
FROM node:8.12.0
LABEL maintainer="pokhrel.aashish7@gmail.com"
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node app.js
EXPOSE 3000
