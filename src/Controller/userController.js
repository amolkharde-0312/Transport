const registerService = require("../service/userService");

const registerController = async (req, res) => {
  try {
    const user = await registerService(req.body);
    res.status(201).send({
      message: "User registered successfully",
      data: user,
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error registering user", data: null, success: false });
  }
};
module.exports = {
  registerController,
};
