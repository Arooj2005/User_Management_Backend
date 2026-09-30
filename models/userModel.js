const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
   name: {
      type:String,
      required: [true, "Name is required!"],
      trim:true
   },
   age: {
      type: Number,
      required:[true, "Age is required"],
      min: [18, "Age must be at least 18"],
       max: [100, "Age cannot exceed 100"]
   }
},
{timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;

