## Info from source i stole my code: Example of basic account system on React and MongoDB
This is an example web application written in React to demonstrate basic account feature with MongoDB.
You can create an account and sign in with email or tokens.  I borrowed ( ported ) most of code from Meteor's account package which I love.
I ported Meteor's account package because I could not find good examples to develop simple signup/signin system without using Meteor when I start using React
Original git repo: https://github.com/kouohhashi/react_mongo_accounts.git

## Install  
```
git https://github.com/kouohhashi/react_mongo_accounts.git
cd react_mongo_accounts
npm install
```

## modify database name on routes/api.js  

## Usage  

### Start API server (backend)  
API server is going to start on port 4002
You can change parameters around mongodb at ./server/routes/settings.js
```
npm run start_server
```

### Start React (frontend)
React is going to start on port 3000
```
npm run start_react
```

You can check at http://localhost:3000  

## Requirement  

### You need MongoDB. Here's an example of installing MongoDB on mac os X  

```
brew tap mongodb/brew
brew install mongodb-community
mkdir mongodb_data  
mongod --dbpath mongodb_data/  " It is not a must" 
```


# MongoDB create admin user and password
```
mongo
use admin
db.createUser(
  {
    user: "robz",
    pwd: "Password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
exit
```
# CRUD How to make sense of CRUD
https://docs.mongodb.com/manual/crud/