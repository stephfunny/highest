# highest

Given a data file containing scored records, this program outputs the N highest record IDs & scores by score in descending order, highest score first. The output is in correctly formatted JSON.

The input data file has a record per line. Each line has the following structure:
```
<score>: <json dictionary>
```

An example program execution is:

```
$ ./highest score_recs.data 5
[
    {
        "score": 16774838,
        "id": "9ab7247c02044c65936a467016fff6b6"
    },
    {
        "score": 16763774,
        "id": "c51a310f80604ef68a4cb2b83bffcb7e"
    },
    {
        "score": 16761021,
        "id": "c1dbd109336242e0a64527ba8cffc0bd"
    },
    {
        "score": 16755441,
        "id": "57b9ea55db954cbc8f452b34a2ffaaf1"
    },
    {
        "score": 16753041,
        "id": "e8cafaf8cf2b41639422781fbdffa191"
    }
]
```
