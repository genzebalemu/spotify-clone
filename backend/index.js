import express from "express"
import cors from "cors";
const app = express()


app.use(cors())
const port = 4000;
app.listen(port, ()=>{
    console.log(`backend is running on port ${port}`)
})