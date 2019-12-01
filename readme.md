https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/configguide.md   
https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
https://blog.stack-labs.com/code/kustomize-101/

helm install  --dry-run --debug   ./kube-auth-express -n auth-test 
helm install stable/nginx-ingress  -n auth-test-ingress --set controller.ingressClass=auth-test --set controller.metrics.enabled=true

docker run -p 8080:8080  -mount type=bind,source="$(pwd)"/server/env.yaml ,target=/server/  kapopken/kube-auth-test