From node:20-alpine

WORKDIR  /home/node/app 

COPY . /home/node/app

RUN npm install 

EXPOSE 3000

CMD ["npm","start"]