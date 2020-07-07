class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

var userOne = new User('patrick@dev.com', 'Patrick');
var userTwo = new User('robert@dev.com', 'Robert');

console.log(userOne);
console.log(userTwo);

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
