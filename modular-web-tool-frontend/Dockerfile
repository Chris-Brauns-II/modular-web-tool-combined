FROM node

RUN apt-get -y update \
  && apt-get install -y git

RUN npm install -g @vue/cli

WORKDIR /app

EXPOSE 8080

USER node

CMD ["npm", "start"]