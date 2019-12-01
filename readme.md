https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/configguide.md   
https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
https://blog.stack-labs.com/code/kustomize-101/

helm install  --dry-run --debug   ./kube-auth-express -n auth-test --set ingress-class=auth-test

helm install --dry-run --debug ./mychart --set service.internalPort=8080