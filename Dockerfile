FROM node:9

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

COPY . /usr/src/app

RUN npm cache clean --force

RUN npm install -g grunt-cli bower yo generator-karma generator-angular wiredep

RUN npm install

RUN bower install --allow-root

EXPOSE 9000

CMD ["grunt", "serve"]
