cd "$1/offline_chart"

# Redirect online libs to localhost
./insertRedirectionInEtcHosts.sh

# Generate certificates for HTTPS server
./generateCertificate.sh

# Start HTTP server
./startServer.sh &

# Start HTTPS server
./startHttpsServer.sh &

cd ..

# Start the dashboard
npm start &

while true; do sleep 1000; done
