import mongoose from "mongoose";
import {model,Schema} from "mongoose"

const UserSchema = new Schema({
    
        firstName: {
            type: String,
            required: [true, "First name is required!"],
            minlength: [2, "First name must be at least 2 characters long!"],
            maxlength: [255, "First name must be less than 255 characters long"]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required!"],
            minlength: [2, "Last name must be at least 2 characters long!"],
            maxlength: [255, "Last name must be less than 255 characters long"]
        },
        email:{
            type:String,
            required: [ true, "email is required"],


        }
    },
    { timestamps: true }
);
const User = model("Users", UserSchema);
export default User;
