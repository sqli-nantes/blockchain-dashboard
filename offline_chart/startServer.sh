export NODE_TLS_REJECT_UNAUTHORIZED=0

cd public
sudo http-server -p80
#443 -S -C  ../bin/cert.pem -K ../bin/key.pem
