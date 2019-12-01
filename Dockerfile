FROM node:12

WORKDIR /usr/src/app


RUN chown -R node:node /usr/src/app
# Install app dependencies
COPY package*.json ./
COPY server/ ./server

USER node

RUN npm ci --only=production
COPY bin/www ./bin/www
COPY --chown=node:node . .
RUN ls server/
EXPOSE 8080

CMD [ "node", "./bin/www" ]