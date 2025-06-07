#!/bin/bash
cd /var/www/app
npm install --production
pm2 startOrReload ecosystem.config.js || pm2 restart all || pm2 start index.js --name simple-node-app