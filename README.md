# ABC stock test
The example code for test developer exprerince.


### The step of my configure of the project 
I'm installed all of these in my machine without package.json on the first step.
```
sudo npm install -g flow
```
Afther that install Sqlite3 and go to the next step.

## The Project using modules added to package.json.
- express
- babel
- morgan
- ejs
- googlefinance
- knex 
- sqlite3
- gulp, gulp-shell, gulp-watch, gulp-live-server
- rimraf


My Dependencies module

```
{
  "devDependencies": {
    "babel-cli": "^6.11.4",
    "babel-plugin-transform-flow-strip-types": "^6.8.0",
    "babel-preset-es2015-node5": "^1.2.0",
    "babel-preset-stage-0": "^6.5.0",
    "gulp": "^3.9.1",
    "gulp-live-server": "0.0.30",
    "gulp-livereload": "^3.8.1",
    "gulp-shell": "^0.5.2",
    "gulp-util": "^3.0.7",
    "gulp-watch": "^4.3.8",
    "jade": "^1.11.0",
    "rimraf": "^2.5.3",
    "run-sequence": "^1.2.2"
  },
  "dependencies": {
    "body-parser": "^1.15.2",
    "ejs": "^2.4.2",
    "express": "^4.14.0",
    "google-finance": "^0.1.4",
    "knex": "^0.11.9",
    "morgan": "^1.7.0",
    "sqlite3": "^3.1.4"
  }
}
```

### This project using port 3001
```
http://localhost:3001
```
You'll see the home and you can curl the finance data from NASDAG by google finance api

You can clone this project into you machine or download without git at link below.

[https://drive.google.com/drive/folders/0B5pNi9CGN65ieHQ4RVZmMGZtM28](https://drive.google.com/folderview?id=0B5pNi9CGN65ieHQ4RVZmMGZtM28&usp=sharing)

















