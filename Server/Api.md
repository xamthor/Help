# Help Server API Docs

**Auth**

Post: /auth/login

`{
    "email": "email | username",
    "password": ""
}`

Post: /auth/signup

`{
    "id": 1,
    "email": "",
    "userName": "",
    "password": ""
}`

**Profile**

Get: /profile/

Post: /profile/update

`{
    "email": "test@test.com",
    "userName": "miguel",
    "firstName": "Joe",
    "lastName": "Smith",
    "phoneNumber": "479 111 2223"
}`

**Status**

Post: /status/create

`{
    "content": ""
}`

Get: /status/latest

`{
	"id": "5ff54ce21a7b19271bf6c944",
    "user_id": ""
    "content": ""
    timestamp: ""
}`

**Connections**

/connection/topfive

/connection/add

/connection/create

**Feed**

/feed/

**Search**

/search/

**Message**

/message/

/message/send
