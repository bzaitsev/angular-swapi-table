# Star Wars planets <img src="https://bzaitsev.github.io/angular-swapi-table/favicon.ico" height="24">
[Demo](https://bzaitsev.github.io/angular-swapi-table/)

**Tech stack:** Angular, Node.js, [The Star Wars API](https://swapi.dev)

## Task description
Create application that shows Star Wars planets data using https://swapi.dev

**Backend**  
Create handler that fetches all required data (NOTE planets API has pagination, need to fetch all).

**Frontend**  
- Display table with expandable rows
- Table fields: name, terrain, population (formatted as 10k, 2m etc), residents amount, films amount
- Expandable row data: resident names and film names

Links:  
- Star Wars planets: https://swapi.dev/api/planets  
- Material table (there is example with expandable rows as well): https://material.angular.io/components/table/overview

## Run project locally
To launch server, in root folder run:  
```sh
npm i  
npm run start
```  

To start Angular app, in "client" folder run:  
```sh
npm i  
npm run serve-dev
```