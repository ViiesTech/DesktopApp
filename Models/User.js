import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "User name must be filled"]
    },
    email:{
        type: String,
        required: [true, "Email can't be empty"]
    },
    password:{
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        // required: true
    },
    coverPic: {
        type: String,
        // required: true
    },
    role:{
        type: String,
        required: true,
        enum:["SalesOfficer", "Nurse"]
    }
})

const User = mongoose.model("User", UserSchema)
export default User