# React-Google-Books-Search

Search and save books from the Google Books API

## Table of Contents 

## Objective 

I wanted to create a MERN stack application that allows the user to search and save books.  Utilizing Google's API & MongoDB, I allow the user to post, delete, and read from the database.  I also took advantage of React Hooks to allow for functional based components. 


## Live Link
https://whispering-atoll-21977.herokuapp.com/



## Screenshot
![Screenshot](/ss/Screenshot%20(23).png)

## Code Structure

Utilizing React, I was able to generate components that together, build the application.  My components help generate modular code that allows me to pinpoint and modify a specific feature.  The src folder contains all of my components and my front-end API calls.  The root contains all of my backend functionality.  The index.js runs the server and requires the routes.  The routes handle the API calls from the front-end and calls the controller.  The controller calls the model to handle the post, delete, and read features to send back the data to the front-end.


### Technologies
Front-End
- [ ] HTML5
- [ ] CSS3/Grid
- [ ] React.js

Back-End
- [ ] Node.js
- [ ] Express.js
- [ ] MongoDB
- [ ] NPM Packages

### Setup 
```
1. git clone https://github.com/Dhanya-krishanan2/google-book-search
2. cd React-Google-Books-Search in your terminal
3. npm run install
4. npm run start

```
### Requirements 
```
1. MongoDB 
2. Available Port:3000

```
### The workflow of this app is given below
   This application is a full stack application the client folder consisting of many file and which is divided in to components, api, and pages.  In the api folder there is a file called index.js which contains the npm package called 'axios' and it is resposible for the routing and google api. In the components folder there is many other folder named  BookWrapper, Form, NavBar, NoResult, SavedBook wrapper, SearchResults, SearchWrapper etc. Each of having files named index.js and style.css.    

