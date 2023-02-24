class User {
  // User code here

  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age

    this.loggedIn = false 
  }

  //the user has the following methods (each called by ScooterApp)
  login(password){

    if(password === this.password){
      console.log("user logged in")
      return this.loggedIn = true
    }
    else{
      throw new Error("incorrect password") 
    }

  }

  logout(){
    if(this.loggedIn){
      console.log("user has logged out successfully")
      return this.loggedIn = false
    }
    else{
      console.log("log out unsuccessful")
    }
  }
}

module.exports = User
