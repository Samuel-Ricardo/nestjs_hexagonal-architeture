FROM node:18.16.1-slim

RUN apt update && apt install -y procps

USER node

WORKDIR /home/node/app

CMD ["npm", "run", "start:docker"]
