# Exam #2: "Meme Generator"
## Student: s281557 CORVAGLIA ALESSIO

## React Client Application Routes

- Route `/`: page content and purpose
- Route `/something/:param`: page content and purpose, param specification
- ...

## API Server

- POST `/api/sessions`
  - request parameters and request body content
  - response body content
- DELETE `/api/sessions/current`
  - request parameters
  - response body content
- GET `/api/sessions/current`
  - request parameters and request body content
  - response body content
- GET `/api/memes/all`
  - request parameters and request body content
  - response body content
- GET `/api/memes/public`
  - request parameters and request body content
  - response body content
- GET `/api/images`
  - request parameters and request body content
  - response body content
- GET `/api/images/:id`
  - request parameters and request body content
  - response body content
- GET `/api/images/info/:id`
  - request parameters and request body content
  - response body content


## Database Tables

- Table `fonts` - contains id, font
- Table `images` - contains id, path, up, center, down
- Table `memes` - contains id, title, imageid, textup, textcenter, textdown, public, userid, copy, color, fontid
- Table `users` - contains id, email, name, hash


## Main React Components

- `ListOfSomething` (in `List.js`): component purpose and main functionality
- `GreatButton` (in `GreatButton.js`): component purpose and main functionality
- ...

(only _main_ components, minor ones may be skipped)

## Screenshot

![Screenshot](./img/screenshot.jpg)

## Users Credentials

- USERNAME: test1@polito.it, PASSWORD: test1 (plus any other requested info)
- USERNAME: test2@polito.it, PASSWORD: test2 (plus any other requested info)
- USERNAME: test3@polito.it, PASSWORD: test3 (plus any other requested info)
