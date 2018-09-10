const cloud = require('@pulumi/cloud-aws');

const service = new cloud.Service('pulumi-docker', {
  containers: {
    app: {
      build: "./app",
      memory: 128,
      environment: {
          PORT: "80"
      },
      ports: [{ port: 80 }]
    }
  },
  replicas: 1
});

exports.url = service.defaultEndpoint.apply(e => `http://${e.hostname}`);