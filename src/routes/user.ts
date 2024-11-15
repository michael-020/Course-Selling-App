import express, { Router } from "express";

const userRouter: Router = express.Router();

userRouter.get("/signup", (req, res) => {
    res.send("this is userRouter")
})

userRouter.get("/signin", (req, res) => {
    res.send("this is userRouter, Hello")
})

export default userRouter;