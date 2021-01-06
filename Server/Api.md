# Help Server API Docs

**Auth**

Post: /auth/login

`{
    "email": "",
    "password": ""
}`

Post: /auth/signup

`{
    "id": 1,
    "email": "",
    "userName": "",
    "password": ""
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
