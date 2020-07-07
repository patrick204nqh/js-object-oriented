class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, ' just logged in');
  }
  logout() {
    console.log(this.email, ' just logged out');
  }
}

var userOne = new User('patrick@dev.com', 'Patrick');
var userTwo = new User('robert@dev.com', 'Robert');

userOne.login();
userTwo.logout();
