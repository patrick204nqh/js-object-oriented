var userOne = {
  email: 'patrick@dev.com',
  name: 'Patrick',
  login() {
    console.log(this.email, ' has logged in');
  },
  logout() {
    console.log(this.email, ' has logged out');
  },
};

console.log(userOne.name);
