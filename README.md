# Reedsy-frontend
SPA with Vue.js/Vuetify

## 1. About me

As a fan of Evan You, creator of Vue.js, I have done many projects with Vue.js

Here is one of them: www.uhomie.cl - Real Estate Agents site of Chile

Back-end: Laravel/Mysql, Front-end: Vue.js

I worked as a front-end engineer on it

I have done search fileter feature, adding google calendar, whatsapp chat and so on

Also done some design fixes - Vue.js and Laravel blade template

Here is another one built with Angular: www.app.perkpass.io


## 2. General

##### 2.1. What kind of front end projects do you enjoy working on? Why?
Vue.js or Angualr.js

I prefer Vue.js because I am a fan of Vue.js

I am sure it's much easier than other front-end frameworks such as Angular, React, etc

Simply Vue.js is more lightweight than Angular is a good fit for complex applications

The advantage of Vue over React is Vue's documentation is largely considered better so Vue is easier to learn compared to React

Nowadays, Vue is widely used for so many projects

Howeve, Vue has some disadvantages - lack of support, language barriers and limit plugins

Vue.js is new and popular javascript framework. Most of the drawbacks of Vue.js are because it is new but still it is the fastest-growing libraries The high-speed rendering, efficient component operation and simplicity of code have already made it the most preferred framework at present and it will hold this position in near future

##### 2.2. Which are your favorite features of HTML5? How have you used them before?
The most powerful features are Canvas, WebSockets and so on

I have used them to build the chat app

With Canvas I have designed UI with 3D animation, draw images, etc

I have implemented real-time chat easily with WebSockets

##### 2.3. Explain the difference between creating a DOM element setting `innerHTML` and using `createElement`.
We can recreates all DOM nodes inside the div element using innerHTML and simply append a new element to the div using create Element.

In other words, innerHTML is good fit for doing several things to an element but createElement is the more efficeint for appending a new element to the div

##### 2.4. Compare two-way data binding vs one-way data flow.
Two-way data binding means that UI fileds are bound to model data dynamically - a UI field changes, the model data changes with it and a model data changes, a UI field also changes However one way data flow means that only model data changes, a UI field changes

In front-end frameworks, two-way data binding are mostly used - we can do it using v-model and v-bind 

##### 2.5. Why is asynchronous programming important in JavaScript?
It's the only thing that allows you to do more than one things at the same time

Synchronous programming means that, barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests and disk I/O

Asynchronous programming means that the engine runs in an event loop. When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result. When the response is ready, an interrupt is fired, which causes an event handler to be run, where the control flow continues. In this way, a single program thread can handle many concurrent operations

User interfaces are asynchronous by nature, and spend most of their time waiting for user input to interrupt the event loop and trigger event handlers

Node is asynchronous by default, meaning that the server works in much the same way, waiting in a loop for a network request, and accepting more incoming requests while the first one is being handled

This is important in JavaScript, because it is a very natural fit for user interface code, and very beneficial to performance on the server


## 3. Styling

#### Done
- Implement styling rules that consider different screen sizes.
- The footer should stick to the bottom when scrolling.
- You can, and should, use a CSS pre-processor, such as SASS or LESS.


## 4. SPA

Used Vue.js


#### Done
- Implement text search on the books list (for title and synopsis)
- Add pagination on the books list
- Add a comments section on the book page


### How to run


```bash
yarn install
```

or

```bash
npm install
```

Run the server using:

Q3

```bash
npm run serve
```

Q4

```bash
npm start
```
