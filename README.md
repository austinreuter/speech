Begin..
-----
*start npm in package.json* 
```
npm start
npm webpack
```
> start => server
> webpack => interface



Objective
-------
> create, recall, and sort audio to text files,

MVP
----
> features 
* convert audio to text
* categorize and tag audio files
* search categorical audio files with API
* retrieve specific files by name or by categorical hash 
* create and store albums of related files  
* *tracking*

influences
------
* bit.ly create store and retrieve
* instagram search
* twitter tagging --even text search

interface / features
----
users? yes. superuser, maybe. 
profile? to see your own memos.
  to see profile of other memos

search: hashtag / user / notes / text
  navigate search with audio (ok google, hello app, or personalized command - then search request)
audio to text: /editing: emphasizing with BOLD ITALICS in audio/more visual terms
audio to music: be able to sing
sharing

tracking?
  * track health, habits... 
    *user story* 
    > : 
    ``` wake up, face screen, blink twice: next page. '
        scan the page, blink twice and highlight the section.
          speak.
        record how you feel today, and what you hope for today. 
        End of Questionaire feature
        
        look at the top of the screen. blink twice: 
          here is what you have scheduled for today.
            text reel: 80% of those with 80% more likes(publications) spend 1 more hour of creative writing about X, and read Y to study it, so here is Z that is characteristic to what you work on X + A`
        End of Schedule feature
        
        see reaction block, look, blink twice
        **speak**
        ..* to reaction block,
        now speak how to plan and solve the todo list
    + blink twice to select a block, also command to continue, 
    + and speak to record and store
    + also track todo's and accomplishments
    > as yet, to track progress
    
     
        
        
    ```

database
-------
```
*data*
  sound data
  json text ^

  hashtag hash
  userID 
 
```

sample sql tables, indexed

```memo-data``` | | | | | | 
--- | --- | --- | --- | --- | --- 
 index1 | user_id2 | memo_id3 | memo4 | tag_id5 | ?spin6 
 num inc1 | num inc2 |  json3 |  json4 | num5 or null | number or hash relation 

```user``` | | | | 
--- | --- | --- | --- | 
| index1 | user2  | user_id3 | hashword4 |
| num inc1| num2  | num3 | string4 |

```memo``` | | |
--- | --- | --- |
| memoid | audio | memo |

```Spin recommendation``` | |
--- | --- |
| group_id | spin |


routing / API
------
/search
  /hashtag
  /word
  /user
  /related
/memo {:id}
  /audio
  /text
  /comment
 
testing
------


TODO:
----- 
## deploy / pull / github

## client
  + set up grid system: flexbox react
## STORE
  + set up database
  + graphQL ? relation..
  + optimize / c a c h e
  + user auth
## Dependencies 
  + set up API 
  + set up test dependencies 
  + auth
  + voice 
## server 
  + user 
## Test 
  + env DB
  + unit
  + integration

# Voice
  + route: graphQL? store : retrieval
  + logic / denormalize / 
  + integrate 
    + tag / [sub]classify 


*tag* 
``` (
    params[ ...research ...relation ],
    logic / steps[ power.relation, search... ]
    GRAPHQL
  ) ```

#FS
>server
  logic 
    analyze voice capture  
      voice api
  routes
    memo / 
      voice
        capture 
        retrieval
      txt
      tag
        hash

