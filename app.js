const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello from the AWS-to-Kubernetes capstone project, deployed with Docker + K8s!\n');
});
server.listen(3000, () => console.log('Server running on port 3000'));
