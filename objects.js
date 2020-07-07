function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, ' has logged in');
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, ' has logged out');
};
var userOne = new User('patrick@dev.com', 'Patrick');
var userTwo = new User('robert@dev.com', 'Robert');

console.log(userOne);
userTwo.login();
