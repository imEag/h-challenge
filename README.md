# H-challenge

H-Challenge is an app to contract television services in a building. 
The user has to write his personal data like name, lastname, email, phone and installation address.

To enter the installation address the application has a search bar which allows to find the building, matching the building's name, address, postal code, city or state with the given input.

The user can select between 2 services: basic service and premium service.

At the end of the process, the user gets a summary of the information given.

## [Use the app here](https://www.imeag.site/)

## technical details

h-challenge is a full-stack app, the project has a client and a server folder. Both front-end and back-end running in the same server in a Digital Ocean droplet. The app is loaded using babel and webpack.

### Front End

The front-end side of the application was built using React as Javascript framework and SCSS as CSS library to manage styles. The page is completely responsive.

The app is divided into several components, many of them are reusable. There were implemented good practices and a very clean code.

Context api was used to manage global states in the whole application.

The client folder is sub-divided in components, img and scss folders. 

To make https request to the server, axios library was used.

### Back End

The back-end side was made using Node.js, Express and more libraries. 

It can be accessed through an API REST, a query parameter must be passed.

A get request example is https://imeag.site/server/buildings?query=Chelsea

The file structure selected was the domail folder structure.

### DB

MongoDB was the database selected to this process, it is running locally in the same droplet as the rest of the application.

### Deploy

The application was deployed in a Digital Ocean Droplet running Ubuntu. The app is running in the background using pm2, the proxy was set using Nginx, the SSL certificate was created using Certbot and the Domain is a domain of my property.
