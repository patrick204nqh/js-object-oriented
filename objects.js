class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, ' just logged in');
    return this;
  }
  logout() {
    console.log(this.email, ' just logged out');
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, ' score is now ', this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => u.email != user.email);
  }
}

var userOne = new User('patrick@dev.com', 'Patrick');
var userTwo = new User('robert@dev.com', 'Robert');
var admin = new Admin('kevin.@gmail.com', 'Kevin');

var users = [userOne, userTwo, admin];

// admin.deleteUser(userOne);
// userOne.deleteUser(userTwo);

console.log(users);
