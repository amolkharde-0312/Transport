
const User = require("../models/User");

const registerService = async (data) => {
  const { firstName, lastName, email, password, mobileNumber } = data;

  // Validate required fields
  if (!firstName || !lastName || !email || !password || !mobileNumber) {
    throw new Error("All fields are required");
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Create new user
  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    mobileNumber,
  });

  await newUser.save();

  return newUser;
};

module.exports = registerService;
