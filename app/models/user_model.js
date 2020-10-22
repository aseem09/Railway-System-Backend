const User = function (user) {
  this.user_name = user.user_name;
  this.user_password = user.user_password;
  this.email = user.email;
  this.age = user.age;
  this.gender = user.gender;
  this.city = user.city;
  this.aadhaar_number = user.aadhaar_number;
  this.phone_number = user.phone_number;
};

module.exports = User;