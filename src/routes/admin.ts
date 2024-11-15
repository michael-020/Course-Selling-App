import express, { Express, Router } from "express";

const adminRouter: Router = express.Router();

adminRouter.get("/", (req, res) => {
    res.send("this is adminRouter")
})

export default adminRouter;