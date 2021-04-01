FROM node:latest
EXPOSE 80
COPY . .
CMD node hostname.js 80
