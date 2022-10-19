# ASE's Quiz API

This API contains questions for your apps. For now, there are 500+ questions, and the number will increase day by day.
The questions consist of 8 different categories and 3 difficulties. Hope this API can be helpful for your apps or games.

If you wanna use this : [https://rapidapi.com/AhmedSemih/api/ases-quiz-api1](https://rapidapi.com/AhmedSemih/api/ases-quiz-api1)

## Overview

- [How to use](#how-to-use)
- [Endpoints](#endpoints)
    - [Questions ("/questions")](#questions-questions)
    - [Categories ("/categories")](#categories-categories)
    - [Difficulties ("/difficulties")](#difficulties-difficulties)
- [Data Models](#models)
    - [Question](#question)
    - [Category](#category)
    - [Difficulty](#difficulty)

## How to use
API is very easy to use and simplified as much as possible for usability and understandability.
All response are return this schema : ```{ "data": array (or error),  "result_code" : string, "result_message" : string }``` .
All requested data in the **"data"** field. You can use the **"result_message"** for checking status. It only can be "success" or "failed".

## Endpoints
All endpoints must be preceded by the base url.

### Questions ("/questions")
This returns all existing questions.

```json
{
  "quesions": [
     {
         "_id":"633b1f58e9cc1b3541dd07b6",
         "text":"What insect can also be known as the Devil`s Darning Needle?"   
         "options":
            [
              { "option":"Mosquito", "isCorrect":false },
              { "option":"Dragonfly", "isCorrect":true },
              { "option":"Thrips", "isCorrect":false },
              { "option":"Cat Flea", "isCorrect":false },
            ],
         "category":{
              "_id":"63357b0d3ab81af9ad154eba",
              "name":"Science and Nature"
         },
         "difficulty":{
              "_id":"63357b533ab81af9ad154ebe",
              "degree":"Medium"
         }
     },
     "..."
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Get Question By Id ("/questions/:id")
This returns question by id.

*Example*: ("/questions/633b1f58e9cc1b3541dd07b6");

```json
{
  "question": [
     {
         "_id":"633b1f58e9cc1b3541dd07b6",
         "text":"What insect can also be known as the Devil`s Darning Needle?"   
         "options":
            [
              { "option":"Mosquito", "isCorrect":false },
              { "option":"Dragonfly", "isCorrect":true },
              { "option":"Thrips", "isCorrect":false },
              { "option":"Cat Flea", "isCorrect":false },
            ],
         "category":{
              "_id":"63357b0d3ab81af9ad154eba",
              "name":"Science and Nature"
         },
         "difficulty":{
              "_id":"63357b533ab81af9ad154ebe",
              "degree":"Medium"
         }
     }
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Get Random Questions ("/questions/:number")
This returns random different questions. Number parameter only can be 20, 50 or 100.

*Example*: ("/questions/random/20");

```json
{
  "questions": [
     {
         "_id":"633f452a6c9ef451f3102f1f",
         "text":"How many times are the words `Hey Jude` mentioned in the Beatles song of the same name?"   
         "options":
            [
              { "option":"24", "isCorrect":true },
              { "option":"14", "isCorrect":false },
              { "option":"34", "isCorrect":false },
              { "option":"54", "isCorrect":false },
            ],
         "category":{
              "_id":"63357ae03ab81af9ad154eb6",
              "name":"Music"
         },
         "difficulty":{
              "_id":"63357b5b3ab81af9ad154ec0",
              "degree":"Hard"
         }
     },
     "..."
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Get Random 20 Questions By Category ("/questions/random/category/:categoryId")
This returns random 20 different questions in the selected category.

*Example*: ("/questions/random/category/63357ae03ab81af9ad154eb6");

```json
{
  "questions": [
     {
         "_id":"6340477dd25ee1a315c627ee",
         "text":"Who sang the title track for the Bond Film `For Your Eyes Only`?"   
         "options":
            [
              { "option":"Stevie Nicks", "isCorrect":false },
              { "option":"Mariah Carey", "isCorrect":false },
              { "option":"Whitney Houston", "isCorrect":false },
              { "option":"Sheena Easton", "isCorrect":true },
            ],
         "category":{
              "_id":"63357ae03ab81af9ad154eb6",
              "name":"Music"
         },
         "difficulty":{
              "_id":"63343ba898b44503fecc49e9",
              "degree":"Easy"
         }
     },
     "..."
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Get Random 20 Questions By Difficulty ("questions/random/difficulty/:difficultyId")
This returns random 20 different questions in the the selected category.

*Example*: ("/questions/random/difficulty/63357b5b3ab81af9ad154ec0");

```json
{
  "questions": [
     {
         "_id":"63404c6b6e7ec86f693e49cc",
         "text":"Which country did Bruce Grobbellar represent at football?"   
         "options":
            [
              { "option":"Sudan", "isCorrect":false },
              { "option":"Congo", "isCorrect":false },
              { "option":"Gabon", "isCorrect":false },
              { "option":"Zimbabwe", "isCorrect":true },
            ],
         "category":{
              "_id":"63357a4ec37e5b79f7f18979",
              "name":"Sport"
         },
         "difficulty":{
              "_id":"63357b5b3ab81af9ad154ec0",
              "degree":"Hard"
         }
     },
     "..."
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Get All Question By Selected Category ("/questions/category/:categoryId")
This returns all questions in the selected category. Questions returns in random order.

*Example*: ("/questions/category/63357ae03ab81af9ad154eb6");

```json
{
  "questions": [
     {
       "_id":"6340477dd25ee1a315c627ee",
       "text":"Who sang the title track for the Bond Film `For Your Eyes Only`?"   
       "options":
          [
            { "option":"Stevie Nicks", "isCorrect":false },
            { "option":"Mariah Carey", "isCorrect":false },
            { "option":"Whitney Houston", "isCorrect":false },
            { "option":"Sheena Easton", "isCorrect":true },
          ],
       "category":{
            "_id":"63357ae03ab81af9ad154eb6",
            "name":"Music"
       },
       "difficulty":{
            "_id":"63343ba898b44503fecc49e9",
            "degree":"Easy"
       }
     },
     "..."
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Get All Questions By Selected Difficulty ("/questions/difficulty/:difficultyId")
This returns all questions in the selected difficulty. Questions returns in random order.

*Example*: ("/questions/difficulty/63357b5b3ab81af9ad154ec0");

```json
{
  "questions": [
     {
        "_id":"633963a15717012bd65144ed",
        "text":"In which African country is Mount Kilimanjaro?"   
        "options":
           [
             { "option":"Algeria", "isCorrect":false },
             { "option":"Niger", "isCorrect":false },
             { "option":"Ethiopia", "isCorrect":false },
             { "option":"Tanzania", "isCorrect":true },
           ],
        "category":{
             "_id":"63357abb3ab81af9ad154eb0",
             "name":"Geography"
        },
        "difficulty":{
             "_id":"63357b5b3ab81af9ad154ec0",
             "degree":"Hard"
        }
    },
    "..."
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Categories ("/categories")
This returns all categories.

```json
{
  "categories": [
    {
      "_id": "63357a4ec37e5b79f7f18979",
      "name": "Sport"
    },
    {
      "_id": "63357aa53ab81af9ad154eae",
      "name": "Art and Literature"
    },
    {
      "_id": "63357abb3ab81af9ad154eb0",
      "name": "Geography"
    },
    {
      "_id": "63357ad03ab81af9ad154eb2",
      "name": "General Knowledge"
    },
    {
      "_id": "63357adc3ab81af9ad154eb4",
      "name": "History"
    },
    {
      "_id": "63357ae03ab81af9ad154eb6",
      "name": "Music"
    },
    {
      "_id": "63357af83ab81af9ad154eb8",
      "name": "TV Series and Films"
    },
    {
      "_id": "63357b0d3ab81af9ad154eba",
      "name": "Science and Nature"
    }
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Get Category By Id ("categories/:id")
This returns category by id.

*Example*: ("categories/63357ad03ab81af9ad154eb2");

```json
{
  "category": [
    {
      "_id": "63357ad03ab81af9ad154eb2",
      "name": "General Knowledge"
    }
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Difficulties ("/difficulties")
This returns all difficulties.

```json
{
  "difficulties": [
    {
      "_id": "63343ba898b44503fecc49e9",
      "degree": "Easy"
    },
    {
      "_id": "63357b533ab81af9ad154ebe",
      "degree": "Medium"
    },
    {
      "_id": "63357b5b3ab81af9ad154ec0",
      "degree": "Hard"
    }
  ],
  "result_code": "200",
  "result_message": "success"
}
```

### Get Difficulty By Id ("/difficulties/:id")
This returns difficulty by id.

*Example*: ("difficulties/63357b533ab81af9ad154ebe")

```json
{
  "difficulty": [
    {
      "_id": "63357b533ab81af9ad154ebe",
      "degree": "Medium"
    }
  ],
  "result_code": "200",
  "result_message": "success"
}
```

## Data Models

### Question

| Field             | Type              | Description            |
| ----------------- | ----------------- | ---------------------- |
| _id               | string (ObjectId) | Question Id            |
| text              | string            | Question Text          |
| options           | array             | Four Options           |
| category          | string (ObjectId) | Category Id            |
| difficulty        | string (ObjectId) | Difficulty Id          |

### Category

| Field             | Type              | Description            |
| ----------------- | ----------------- | ---------------------- |
| _id               | string (ObjectId) | Category Id            |
| name              | string            | Category Name          |

### Difficulty

| Field             | Type              | Description            |
| ----------------- | ----------------- | ---------------------- |
| _id               | string (ObjectId) | Difficulty Id          |
| degree            | string            | Degree of Difficulty   |
