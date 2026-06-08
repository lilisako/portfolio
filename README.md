# Cheat Sheet
This page features a curated list of commands that I regularly use in web development. Happy Hacking!

## 🐋 Kubernetes 
```bash
# List all pods in the default namespace
kubectl get pods

# Display logs for a specific pod and container
kubectl logs <pod-name> -c <container-name>

# Execute an interactive shell in a specific pod and container
kubectl exec -it <pod-name> -c <container-name> -- /bin/sh
```

## 🐳 Docker
```bash
# Remove unused resources and free up space in the Docker system
docker prune system

# Remove all unused resources, including stopped containers and unused images
docker prune system -a

# Stop all containers
docker stop $(docker ps -a -q)
```

## 🌐 Curl

```bash
# GET request
curl -X GET "https://example.com/api/v1/books" \
     -H "Accept: application/json" \
     -H "Authorization: Bearer ACCESS_TOKEN"

# POST request
curl -X POST "https://example.com/api/v1/books" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer ACCESS_TOKEN" \
     -d '{"param1": "value1", "param2": "value2"}'

# DELETE request
curl -X DELETE "https://example.com/api/v1/books/5"
```

## 🐍 Python
```bash
# Run a Python script with a virtual environment
python -m venv venv
source venv/bin/activate
```
