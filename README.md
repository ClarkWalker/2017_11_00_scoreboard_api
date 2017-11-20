#Scoreboard api
### this is a crud api

####Read
make a get request to https://cws-scoreboard-api.herokuapp.com/
returns all table data
```
[
    {
        "id": 1,
        "name": "clark",
        "score": 55
    },
    {
        "id": 2,
        "name": "bob",
        "score": 134
    },
    {
        "id": 3,
        "name": "fred",
        "score": 76
    }
]
```

####Create
make a post request to https://cws-scoreboard-api.herokuapp.com/
the req.body should be delivered with the following keys
```
[
    {
        "id": 1,
        "name": "clark",
        "score": 55
    },
    {
        "id": 3,
        "name": "fred",
        "score": 76
    },
    {
        "id": 4,
        "name": "joanne",
        "score": 250
    },
    {
        "id": 5,
        "name": "joanne",
        "score": 250
    }
]
```

####Read one
make a get request to https://cws-scoreboard-api.herokuapp.com/player/:id
should return the corresponding player and their score

```
{
    "id": 3,
    "name": "fred",
    "score": 76
}
```

####Update
make a patch request to update the score for a given user at https://cws-scoreboard-api.herokuapp.com/player/score/:id
the body must contain
KEY  |   VALUE
score: NUMBER TO BE USED AS SCORE
you should expect output like this
```
{
    "id": 3,
    "name": "fred",
    "score": 2500
}
```


####Delete
make a delete request to delete a user at https://cws-scoreboard-api.herokuapp.com/player/:id
you should expect output like this
```
[
    {
        "id": 1,
        "name": "clark",
        "score": 55
    },
    {
        "id": 3,
        "name": "fred",
        "score": 2500
    },
    {
        "id": 4,
        "name": "joanne",
        "score": 250
    }
]
```

Enjoy ;)
