### 功能

用来启动一个http服务

# up

### 构建
- client
```
docker build -t hongz1125/cicd-web .&&
docker push hongz1125/cicd-web
```
- server
```
docker pull hongz1125/cicd-web && 
docker stop cicd-web && 
docker rm -f cicd-web && 
docker run --name=cicd-web -d -p 10001:9001 hongz1125/cicd-web
```
### 访问地址
http://121.43.119.160:10001/