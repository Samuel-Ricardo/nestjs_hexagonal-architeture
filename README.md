# nestjs_hexagonal-architeture

<p align="center"> 
  <a href="https://www.linkedin.com/in/samuel-ricardo/" target="_blank">
    <img width="auto" src="https://cdn.webo.digital/uploads/2022/09/Nestjs_hero1.png"/>
  </a> 
</p>

<h4 align="center" > 🚀 🟥 Discovery 🟥 🚀 </h4>

<h4 align="center">
  Application developed with the purpose of studying the NestJS Ecosystem and Hexagonal Architeture </a>
</h4>

#

<p align="center">
  |&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#project">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#techs">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#app">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#run-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#author">Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

#

<br>

<p id="project"/>

<h2>  | :artificial_satellite: About:  </h2>

<p>
    This API target is to explore an <b>Hexagonal Architeture implementation</b> With NestJS Framework, furthuermore, this application simulate a relation with a marketing CRM that consume data from this API.
</p>

<br>

<h2 id="techs">
  :building_construction: | Technologies and Concepts Studied:
</h2>

> <a href='https://nestjs.com/'> <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg" /> </a>

- NestJS - [Express]
- Docker
- Sequelize
- SQLite
- Redis
- Bull - [Queues]
- Event-Emmiter
- Swagger | [Documentation]
- JS | Typescript
- Test | Jest
- Axios
- json-server
- eslint
- prettier
- husky
- lint-sataged
- @swc | [Rust Compiler]

> Among Others...

<br>

#

<h2 id="app">
  💻 | Application:
</h2>

<img src="https://miro.medium.com/v2/resize:fit:818/1*aGCx1q4rO5Uny9AauDCqyw.png"/>

The hexagonal architecture consists of the philosophy of ports and adapters, such as the usb-c port on your phone that accepts all types of usb-c compatible chargers.

This concept was applied to create an API that handles and sends the list data to a simulated CRM, for that, I used the event system to create event-listeners and emiters that on trigger send the data to a Queue with Bull & Redis and from the queue the API sends the data to the CRM.

<p id="routes"/>

```bash

$ hexagonal_architeture > api.http


###
GET http://localhost:3000/lists


###
GET http://localhost:3000/lists/3

###
POST http://localhost:3000/lists
Content-Type: application/json

{
  "name": "My List2"
}

###
GET http://localhost:8000/lists

```
