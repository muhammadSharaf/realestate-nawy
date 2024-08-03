## Table of Content

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Ports](#ports)
4. [Project Structure](#project-structure)
5. [Interface](#interface)
6. [Features](#features)
7. [Future Updates](#future-updates)
8. [Dependencies](#dependencies)
9. [Sample](#sample)

## Introduction
An apartment listing application
## Installation
```
git clone https://github.com/muhammadSharaf/realestate-nawy.git

on root directory run: docker-compose up --build 

web application url: http://localhost:3001/
```

## Ports
- Express: 3000
- Next: 3001 (http://localhost:3001/)
- DB: 3306

## Project Structure

```
Server (express-app)
│   controllers
│   models  
│   routes
│   utils (DB configs)
│   app.ts

Web Application (next-app)
│── actions
└── components
|   └── apartments
|   └── elements
|
│── types (Typescript)
|   
└── app (main app router)
|   └── admin
|   │   │   page.tsx
|   │
|   └── apartments
|       │   [apartmentId]
|       │   page.tsx

Mobile Application (React Native)
│── api
└── components  
|   └── apartments
│   
│── navigation
|   └── MainStack
|   └── SCREENS
│   
└── screens
|   └── MainStack
|   └── SCREENS
│
└── theme
```


## Interface
```
interface ApartmentDetails {
    id?: number;
    location: string;
    image?: string;
    beds: number;
    baths: number;
    totalPrice: number;
    createdAt?: Date;
    updatedAt?: Date;
}
```

## Features
- /admin/addApartment (add a new apartment)
body: {
    "location",
    "beds",
    "baths",
    "totalPrice"
}
- /apartments (get all listed apartments)
- /apartments/apartmentId (get apartment details)

## Future Updates
- Fix mobile app connection to server
- Add pagination to /apartments end-point
- add api documentation (Swagger)
- add apartment image

## Dependencies

- Server
  1. Express
  2. Cors
  3. body-parser
  4. mysql2
  5. sequelize
  6. nodemon

- Web application
  1. Next
  2. React
  3. Tailwindcss

- Mobile App
  1. Axios
  2. RN Navigation
  3. RN Config

## Sample
![Sample 1](https://github.com/muhammadSharaf/realestate-nawy/blob/master/next-0.png)
![Sample 2](https://github.com/muhammadSharaf/realestate-nawy/blob/master/next-1.png)
![Sample 3](https://github.com/muhammadSharaf/realestate-nawy/blob/master/next-2.png)
