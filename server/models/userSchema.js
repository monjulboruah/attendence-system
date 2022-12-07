const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: String,
    password: String,
    mobileNo: String,
    schId: String,
    role: {
      type: String,
      default: "students",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Users", userSchema);
