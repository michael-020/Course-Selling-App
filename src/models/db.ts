import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        ref: {type: mongoose.Schema.Types.ObjectId, ref: "courseModel"}
    }]
})

const adminSchema = new Schema({
    username: String,
    password: String,
   
})

const courseSchema = new Schema({
    courseName: String,
    author: String,
    price: String
})

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)