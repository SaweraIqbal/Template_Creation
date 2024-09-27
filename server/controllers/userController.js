const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "All fields are mandatory" });
    return;
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400).json({ message: "User already registered" });
    return;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    profilePic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
  });

  if (user) {
    res.status(201).json({ username: user.username, _id: user.id, email: user.email });
  } else {
    res.status(400).json({ message: "User data is not valid" });
  }
});

// Login User
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "All fields are mandatory" });
    return;
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15d",
      }
    );

    console.log('User data:', { id: user.id, username: user.username, email: user.email, accessToken });

    res.status(200).json({ id: user.id, username: user.username, email: user.email, accessToken, profilePic: user.profilePic });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

// Update profile pic
const updateProfilePic = expressAsyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Expecting the frontend to send the base64 or image URL
    const { profilePic } = req.body;

    if (!profilePic) {
      return res.status(400).json({ message: "No profile picture provided" });
    }

    // Update the user's profile picture with the base64 string or URL
    user.profilePic = profilePic;

    await user.save();
    
    res.status(200).json({ profilePic: user.profilePic });
  } catch (error) {
    console.error("Error updating profile picture:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { registerUser, authUser,  updateProfilePic };
