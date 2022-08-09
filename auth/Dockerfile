FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
ARG ENV=production
ENV NODE_ENV $ENV
COPY . .

CMD npm run $NODE_ENV