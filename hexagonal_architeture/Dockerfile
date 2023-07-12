FROM node:18.16.1-slim

RUN apt update && apt install -y procps sqlite3

WORKDIR /home/node/app

COPY ./  /home/node/app/

RUN npm install

# CMD ["npm", "run", "start:docker"]
