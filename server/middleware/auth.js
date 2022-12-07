const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    //const token = req.cookies.refreshtoken;
    console.log("token", token);
    if (!token) return res.status(400).json({ msg: "Invalid Authentication" });

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Invalid Authentication" });
      console.log(user);

      req.user = user;

      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;
