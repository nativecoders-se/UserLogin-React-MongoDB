## Example of basic account system on React and MongoDB
This is an example web application written in React to demonstrate basic account feature with MongoDB.
You can create an account and sign in with email or tokens.

Original git repo: https://github.com/kouohhashi/react_mongo_accounts.git (Note that i have change some parts so please use this version as example)


## PRE-Requirement  

### You need MongoDB. Here's an example of installing MongoDB on mac os X  

```
brew tap mongodb/brew
brew install mongodb-community
mkdir mongodb_data (Not a must) 
mongod --dbpath mongodb_data/  (Not a must)
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
# Install MongoDB Compass GUI for view data and transaction to MongoDB 
(I have used this a lot. Saved me a lot of time)
https://www.mongodb.com/try/download/compass



## Install the payload
```
git clone https://github.com/nativecoders-se/UserLogin-React-MongoDB.git
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


# CRUD How to make sense of CRUD
https://docs.mongodb.com/manual/crud/
