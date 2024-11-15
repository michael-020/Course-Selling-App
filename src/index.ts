import express, { Express } from "express";
import  adminRouter  from "./routes/admin"
import userRouter from "./routes/user"
const app: Express = express();

app.get("/", (req, res) => {
    res.send("Hello")
}) 

app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/user",  userRouter)

app.listen(3000)