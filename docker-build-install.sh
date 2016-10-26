# Uncomment this line and modify XX.XX.XX.XX to match your DNS IP (duplicate the line if multiple DNS IP)
# echo "nameserver XX.XX.XX.XX" >> /etc/resolv.conf

cat /etc/resolv.conf

apt-get update

apt-get install -y nodejs npm wget nodejs-legacy git

cd "$1"

echo "\n\nInstallation des modules NodeJS in" $(pwd) "\n"

npm install
