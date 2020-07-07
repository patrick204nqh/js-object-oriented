// create user one
var userOneEmail = 'patrick@dev.com';
var userOneName = 'Patrick';
var userOneFriends = ['Kevin'];

// create user two
var userTwoEmail = 'robert@dev.com';
var userTwoName = 'Robert';
var userTwoFriends = ['Kevin'];

// create user one
var userThreeEmail = 'kevin@dev.com';
var userThreeName = 'Kevin';
var userThreeFriends = ['Patrick', 'Robert'];

function login(email) {
  console.log(email, 'is now online');
}

function logout(email) {
  console.log(email, 'has logged out');
}

function logFriends(friends) {
  friends.forEach((friend) => {
    console.log(friend);
  });
}

login(userOneEmail);
