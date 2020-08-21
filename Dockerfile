# copy this in dist folder and build image from there
FROM nginx:latest
COPY assessment-system-frontend /usr/share/nginx/html

