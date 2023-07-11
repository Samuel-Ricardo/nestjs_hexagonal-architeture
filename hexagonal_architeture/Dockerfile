FROM node:18.16.1-slim

RUN apt update && apt install -y procps

WORKDIR /home/node/app

COPY ./  /home/node/app/

RUN npm install

USER node

CMD ["npm", "run", "start:docker"]
