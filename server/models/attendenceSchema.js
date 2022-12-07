const { model, Schema } = require("mongoose");

const attendenceSchema = new Schema(
  {
    studentId: String,
    schId: String,
    attendenceRecord: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Attendence", attendenceSchema);
