const Users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
  register: async (req, res) => {
    //console.log(req.body);
    try {
      const { email, password, role } = req.body;
      console.log(req.body);
      const user = await Users.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "The email already exists" });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password is at atleast 6 character long." });

      // Password encryption
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        email,
        password: passwordHash,
      });

      console.log({
        email,
        password,
      });

      //Save mongodb
      let savedUser = await newUser.save();

      //Then create jsonwebtoken to authentication
      const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res
        .cookie("refreshtoken", refreshtoken, {
          httpOnly: true,
        })
        .status(200)
        .json("Successfully  registered | Please login to continue");
      //res.json({msg: "Register Successful!"})
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    //console.log("Login Api got hit");
    try {
      const { email, password } = req.body;
      console.log("email -- ", email);
      const user = await Users.findOne({ email: email });
      if (!user) {
        console.log("user ---", user);
        return res.status(400).json({ msg: "User does not exist." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log(isMatch);
        return res.status(400).json({ msg: "Incorrect password." });
      }
      //If login success, create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });
      console.log("login");
      return res
        .cookie("refreshtoken", refreshtoken, {
          httpOnly: true,
        })
        .status(200)
        .json({
          refreshtoken,
          id: user._id,
          email: user.email,
          role: user.role,
        });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken");
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

module.exports = userController;
