#!/bin/bash

rm -rf ./certificates/private.key ./certificates/request.csr ./certificates/certificate.crt

mkdir -p certificates

openssl genrsa -out ./certificates/private.key 2048

openssl req -new -sha256 -key ./certificates/private.key -subj "/C=FR/ST=FRANCE/O=SQLI/CN=www.gstatic.com" -reqexts SAN -config <(cat /etc/ssl/openssl.cnf <(printf "[SAN]\nsubjectAltName=DNS.1:fonts.googleapis.com")) -out ./certificates/request.csr

openssl x509 -req -days 365 -in ./certificates/request.csr -signkey ./certificates/private.key -out ./certificates/certificate.crt

rm -f ./certificates/request.csr
