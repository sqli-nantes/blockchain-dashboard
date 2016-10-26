cd "$1/offline_chart"

./insertRedirectionInEtcHosts.sh

./startServer.sh &

#sleep 3

./startHttpsServer.sh &

#sleep 3

cd ..

npm rebuild node-saas

npm start &

while true; do sleep 1000; wget localhost:8080; done
