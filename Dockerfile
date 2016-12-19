FROM ubuntu:16.04

RUN mkdir -p /home/httpserver

COPY ./package.json /home/httpserver/package.json

RUN apt-get update \
	&& apt-get install -y nodejs npm wget nodejs-legacy git

RUN cd /home/httpserver && echo "\n\nInstallation des modules NodeJS in" $(pwd) "\n" -- && npm install

COPY ./ /home/httpserver/

EXPOSE 8080

CMD /home/httpserver/start.sh /home/httpserver
