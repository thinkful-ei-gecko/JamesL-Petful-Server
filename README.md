# Petful
## Project completed by James Lee

### Live: https://jamesl-petful.now.sh
### Client Repo: https://github.com/thinkful-ei-gecko/JamesL-Petful

#### The Petful application resembles an adoption process for cats and dogs.  This application ensures the first cat or dog on the list is adopted first before any others can be adopted.  Users wait in line and once it is YOUR turn you may adopt a cat or dog.

#### Technologies: React, Express, Node

#### Endpoints
GET (/api/cats): Retrieve cats in a Queue structure

GET (/api/dogs): Retrieve dogs in a Queue structure

DELETE (/api/cats):  Dequeues cats on a first-in-first-out basis

DELETE (/api/dogs):  Dequeues dogs on a first-in-first-out basis

#### Data
https://shrouded-anchorage-72118.herokuapp.com/api/cats
https://shrouded-anchorage-72118.herokuapp.com/api/dogs

###### Data Format
  [

    {

      "imageURL":
        "https://kittywise.com/wp-content/uploads/2019/04/Bombay-Cat.jpeg",

      "imageDescription": "Black cat sitting in the grass",

      "name": "Paul",

      "sex": "Male",

      "age": 1,

      "breed": "Bombay",

      "story": "Owner has too many cats."

    }
    
  ]