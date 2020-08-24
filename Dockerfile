# copy this in dist folder and build image from there
FROM nginx:alpine
COPY dist/assessment-system-frontend/ /usr/share/nginx/html
