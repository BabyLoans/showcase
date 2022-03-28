FROM node:latest as builder

WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN sudo apt-get git
RUN yarn install 

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]