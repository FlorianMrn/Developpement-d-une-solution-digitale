FROM node:13.12.0-alpine
WORKDIR /app/front

COPY package.json package-lock.json ./
RUN npm install -f 
RUN npm install react-scripts@4.0.1 -g 
COPY . ./
EXPOSE 3000