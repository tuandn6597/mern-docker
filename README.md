# docker-react-node
A scaffolding for dockerizing react and node

### Usage
*Must have Docker installed

#### Development
To start the dev server, use `docker-compose up`

#### Production
To run production, use `docker-compose -f docker-compose-prod.yml up`

#### Then
Go to `localhost` or `http://192.168.99.100/` depending on which version of docker you have

### build production
cd node && docker build \
    -t <your-docker-username>/<your-project-name>node:latest && \
    docker push <your-docker-username>/<your-project-name>node:latest
### xóa all image
- Xóa tất cả các image bằng lệnh `docker rmi -f $(docker images -qa)`
### xóa all container
-  Lệnh xóa tất cả các container trên host: `docker rm -f $(docker ps -aq)`