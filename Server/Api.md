# Help Server API Docs

**Auth**

Post: /auth/login

`{
    "email": "email | username",
    "password": ""
}`

Post: /auth/signup

`{
    "email": "",
    "userName": "",
    "password": ""
}`

return data 

`{
    "status": "success",
    "token": "tokendata",
    "data": {
        "user": {
            "phoneNumber": "test",
            "firstName": "sss",
            "lastName": "",
            "_id": "5ff775300e93ac0793f5f3fc",
            "email": "ssadddn1@google.com",
            "userName": "yoyo",
            "__v": 0
        }
    }
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

Get: /status/all  "limit 30 newest status"

`{
   {
        "_id": "",
        "user_id": "",
        "content": "",
        "timestamp": "2021-01-07T21:01:29.306Z",
        "__v": 0
    },
   {....},
   {....},
}`

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

/connection

/connection/topfive

/connection/add

/connection/create

**Search**

/search?s=search-term "limit 10 users"

returns array of user objects

`[
    {
        "phoneNumber": "",
        "firstName": "",
        "lastName": "",
        "_id": "",
        "email": "",
        "userName": "",
        "__v": 0
    },
    {....},
    {....},
]`


**Feed**

/feed/

**Message**

/message/

/message/send
