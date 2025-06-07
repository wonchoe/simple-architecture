module.exports = {
  apps: [{
    name: 'simple-node-app',
    script: './index.js',
    env: {
      NODE_ENV: 'production',
      PORT: 80
    }
  }]
}