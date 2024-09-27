const mongoose = require("mongoose");
const userSchema  = mongoose.Schema({
  username :{
    type: String,
    required : [true, "Please add the username"],
  },
  email : {
    type: String,
    required : [true, "Please add the email"],
    unique : [true, "Email address already taken"],
  },
  password : {
    type : String,
    required: [true,"Please add the password" ],
  },
  profilePic: {
    type: String, // Store the URL or path to the profile picture
  },
},
{
  timestamps : true,
});

module.exports = mongoose.model("User", userSchema);