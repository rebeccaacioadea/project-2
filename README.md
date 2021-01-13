![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## Project-2: <<< [Weather Forecast](https://rebeccaacioadea.github.io/project-2) >>>

## Overview 
This is my second project at General Assembly as a Software Engineer Immersive course's student. This was a pair programming and it had to be completed within 48 hours.

The aim of this project is to build a "React application" that consumes a public API.

### Brief:

* Build a React Application.
* Use a minimum of one public API.
* Have Several components - At least one classic and one functional.
* The application should include a router- with several pages.
* Include wireframes. 
* Use semantically clean HTML and CSS (adhere to best practices).
* Be deploy online and accessible to the public.

### Technologies:

* HTML5
* Bulma
* SCSS
* JavaScript
* React.js and JSX 
* Node Package Manager (npm)
* Babel Transpiler
* Webpack
* Insomnia
* VSCode
* GitHub 
* GitHub Pages


## Functionality: 
* User is able to search for the weather in any city around the world.
* The background of the card showing the weather forecast changes according to how hot/ cold the city is. 

## Approach taken:
We started the project by roughly thinking about the React Application we wanted to develop. 
We had to roughly draw out our plans, thinking in details of different components we wanted to have and the functionality that we needed for this project. And then:

1. I setted up the git repository on GitHub and then I added another collaborator onto the project to give them access to it. 
2. We had only 48 hours to complete this project. We started off by pair programming setting up the basic components and BrowserRouter for our application via *VSCode Liveshare*. 
3. Since there was not enough time, we separated work and I took charge of working on the navigation bars, weather forecast and city pages.


## The Wireframe
![](https://i.imgur.com/h56OKdSl.png)

## Endpoints
For this project we used only one public APIs, [openweather](https://openweathermap.org/api) with two different endpoints:

1. Endpoint to access and manipulate the information for the weather forecast by the city id.

###### ***https://api.openweathermap.org/data/2.5/group?id={city_id}***

2. Endpoint to access the information for the weather by the name of the city. We used this endpoint for our search bar, This able the user to search for the weather in any city.

######***https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=8569449663f37c3e52851a11d8ac7e5c***



## Components and their routes
![](https://i.imgur.com/OoaOJifm.png)

We used BrowserRouter provided by ***'react-router-dom'*** for routing the components.


![](https://i.imgur.com/w3O6MFyl.png)

## Screenshots

![](https://i.imgur.com/Jvp7HS7l.png)
![](https://i.imgur.com/sstJRRUm.png)
![](https://i.imgur.com/DUnvAiJm.png)
![](https://i.imgur.com/xkBi8RPm.png)
## Potential future features

### Problems 
During this project, we spent most time working on separate components, hence more than one component at a time, we were faced with so many errors and we didn’t know what was causing them, and on top of that every time I wanted to ‘console.log’ on chrome, my partner had to do it for me. The solution I came out with was, I copied the code for the components I was working on and commented out the code on my partner VS Code.  I use my own VScode to write the code, and chrome to test that it works properly before inserting the code back to our project. 

## Key learnings:
By the end of this project, I had become more confident in using public API, accessing and manipulating information from an endpoint to build a React application.

Throughout this project, I have learnt:

1. Communication is vital when collaborating with others. 
2. Effectiveness of planning. 
3. Importance of setting and meeting deadlines.
4. Presentation skill as we had to demonstrate our demo.



## Contributors

[Rebecca](https://github.com/rebeccaacioadea)

[Natasha](https://github.com/lechmere)
