FROM ubuntu:16.04

RUN mkdir -p /home/httpserver

COPY ./ /home/httpserver/

RUN chmod -R 777 /home/httpserver/*

RUN chmod +x /home/httpserver/docker-build-install.sh

RUN /home/httpserver/docker-build-install.sh /home/httpserver

CMD /home/httpserver/start.sh /home/httpserver
