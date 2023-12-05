FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./app.js ./
COPY ./package.json ./

RUN npm install

RUN npm install pm2 -g

# CMD npm run start
CMD ["pm2-runtime", "app.js"]