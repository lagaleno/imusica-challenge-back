# Chamadas HTTP disponíveis na aplicação

## Users

### Create User session

```
curl --request POST \
  --url http://localhost:3333/users/signIn \
  --header 'Content-Type: application/json' \
  --data '{
	"email":"josemorista@gmail.com",
	"password":"123"
 }'
 ```
### Create User

```
curl --request POST \
  --url http://localhost:3333/users \
  --header 'Content-Type: application/json' \
  --data '{
  "name": "Jose",
	"email":"josemorista@gmail.com",
	"password":"123"
 }'
```

### UpdateUserAvatar

```
curl --request PATCH \
  --url http://localhost:3333/users/updateAvatar \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjYxMTU4MDMsImV4cCI6MTYyNjcyMDYwMywic3ViIjoiMSJ9.A5qoI7G4SNL4C5FVgTkNOGmRwNQtQ8m0rnVK9GPpZys' \
  --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
  --form avatar=@/home/josemorista/Pictures/IMG_20200314_143813.jpg
```

## Posts

### Create Post

```
curl --request POST \
  --url http://localhost:3333/posts \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjY0NDM0NDQsImV4cCI6MTYyNzA0ODI0NCwic3ViIjoiNCJ9.bSvMttt9U-o0gEmAaIP4mXmxoepdKopGms339d9FnF4' \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "Title",
	"content": "teste"
}'
```

### Update Post

```
curl --request PUT \
  --url http://localhost:3333/posts/1 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjYxMTU4MDMsImV4cCI6MTYyNjcyMDYwMywic3ViIjoiMSJ9.A5qoI7G4SNL4C5FVgTkNOGmRwNQtQ8m0rnVK9GPpZys' \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "teste de update de titulo"
}'
```

### Delete Post

```
curl --request DELETE \
  --url http://localhost:3333/posts/3 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjYxMTU4MDMsImV4cCI6MTYyNjcyMDYwMywic3ViIjoiMSJ9.A5qoI7G4SNL4C5FVgTkNOGmRwNQtQ8m0rnVK9GPpZys'
```

### Update Post Image

```
curl --request PATCH \
  --url http://localhost:3333/posts/1/updateImg \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjYxMTU4MDMsImV4cCI6MTYyNjcyMDYwMywic3ViIjoiMSJ9.A5qoI7G4SNL4C5FVgTkNOGmRwNQtQ8m0rnVK9GPpZys' \
  --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
  --form image=@/home/josemorista/Pictures/arch.png
```

### Get Posts

```
curl --request GET \
  --url http://localhost:3333/posts \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjY0NDM0NDQsImV4cCI6MTYyNzA0ODI0NCwic3ViIjoiNCJ9.bSvMttt9U-o0gEmAaIP4mXmxoepdKopGms339d9FnF4'
```

### Get Post by Id

```
curl --request GET \
  --url http://localhost:3333/posts/2 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjYxMTU4MDMsImV4cCI6MTYyNjcyMDYwMywic3ViIjoiMSJ9.A5qoI7G4SNL4C5FVgTkNOGmRwNQtQ8m0rnVK9GPpZys'
```
