FROM ubuntu:16.04

RUN mkdir -p /home/httpserver

COPY ./package.json /home/httpserver/package.json
COPY ./docker-build-install.sh /home/httpserver/docker-build-install.sh

RUN chmod -R 777 /home/httpserver/*

RUN chmod +x /home/httpserver/docker-build-install.sh

RUN /home/httpserver/docker-build-install.sh /home/httpserver

COPY ./ /home/httpserver/

CMD /home/httpserver/start.sh /home/httpserver
