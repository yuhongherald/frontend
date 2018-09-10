FROM node:6.10.0-alpine
WORKDIR /tmp
COPY package.json /tmp/
COPY package-lock.json /tmp/
RUN npm install package.json
RUN npm install webpack@3.3.0 -g --save -dev
RUN npm install webpack-cli -g --save -dev


WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
CMD webpack --watch --watch-polling
ENV NODE_ENV=development
ENV PORT=3000
ENV FACEBOOK_APP_ID=2122033841390157
ENV GOOGLE_CLIENT_ID=241565389594-ap4tdnhank1tke90tf4mr28ugrcqpvgc.apps.googleusercontent.com
CMD [ "npm", "start"]
EXPOSE 3000