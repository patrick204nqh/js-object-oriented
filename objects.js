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

function Admin(...args) {
  // console.log(args);
  User.apply(this, args);
  this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
  users = users.filter((u) => u.email !== user.email);
};

var userOne = new User('patrick@dev.com', 'Patrick');
var userTwo = new User('robert@dev.com', 'Robert');
var admin = new Admin('kevin@dev.com', 'Kevin');

var users = [userOne, userTwo, admin];
// console.log(userOne);
// userTwo.login();
