const Admin = function (admin) {
    this.user_name = admin.user_name;
    this.user_password = admin.user_password;
    this.email = admin.email;
    this.age = admin.age;
    this.gender = admin.gender;
    this.address = admin.address;
    this.posting_city = admin.posting_city;
    this.aadhaar_number = admin.aadhaar_number;
    this.phone_number = admin.phone_number;
  };

  module.exports = Admin;