# DOCKER-VERSION 1.0.0
FROM resin/rpi-raspbian:wheezy
RUN apt-get update
RUN apt-get install -y wget dialog
RUN wget http://node-arm.herokuapp.com/node_latest_armhf.deb
RUN dpkg -i node_latest_armhf.deb
ADD package.json /src/package.json
RUN cd /src && npm install
ADD . /src
WORKDIR /src
EXPOSE 80
CMD ["npm", "start"]

