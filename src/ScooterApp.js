const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here

  constructor(){

    this.stations = {
      "location1": [],
      "location2": [],
      "location3": []
    }
    //an object whose keys are usernames to store all users 
    this.registeredUsers = {

    } 

  }

  registerUser(username, password, age){
    //check for exceptions first 
    if(age < 18 ){
      throw new Error("too young to register")
    }

    if(this.registeredUsers[username]){
      throw new Error("already registered")
    }

    this.registeredUsers[username] = new User(username, password, age)
    console.log("user has been registered")
    console.log("test registerUser: ", this.registerUser)
    console.log("test registerUser: ", this.registeredUsers[username])
  }


  loginUser(username, password){
    
    this.registeredUsers[username][username].login(password)
    if(this.registeredUsers[username][username].loggedin === true){
      console.log("user has been logged in")  
    }
    else{
      throw new Error("Username or password is incorrect")  
    }

  }

  logoutUser(username){

    this.registeredUsers[username][username].logout()
    if( this.registeredUsers[username][username].loggedin ===  false){
      console.log("user is logged out")
    }

    if(!this.registeredUsers[username][username]){
      throw new Error("no such user is logged in")
    }

  }

  createScooter(station){
    this.stations[station].push(new Scooter(station))
    if(this.station[station] == ){
      console.log("created new scooter")
    }

  }

  dockScooter(scooter, station){

  }

  renterScooter(scooter, user){

  }

  print(){

  }
}

module.exports = ScooterApp
