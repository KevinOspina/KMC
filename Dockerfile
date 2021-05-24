# Stage 0, based on Node.js, to build and compile Angular
FROM node:latest as node 
WORKDIR /app
COPY ./ /app/
RUN npm install -g npm@7.14.0
RUN npm install typescript@4.2 --force --legacy-peer-deps
RUN npm install --force --legacy-peer-deps
ARG configuration=production
RUN npm run build -- --prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine 
COPY --from=node /app/dist/KMC /usr/share/nginx/html

