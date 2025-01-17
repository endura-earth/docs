FROM node:20

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

# COPY .output/ .

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]