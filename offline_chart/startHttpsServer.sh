export NODE_TLS_REJECT_UNAUTHORIZED=0

cd http-server/public
sudo node ../bin/http-server -p443 -S -C  ../bin/cert.pem -K ../bin/key.pem
