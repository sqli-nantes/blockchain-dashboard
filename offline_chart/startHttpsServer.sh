export NODE_TLS_REJECT_UNAUTHORIZED=0

cd public
node ../../node_modules/http-server/bin/http-server -p443 -S -C ../certificates/cert.pem -K ../certificates/key.pem
