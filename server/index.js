const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const connectDB = require("./mongo/connect")
dotenv.config()

const postRoutes = require('./routes/postsRoutes')
const dalleRoutes = require('./routes/dalleRoutes')

const app = express()
app.use(cors())
app.use(express.json({limit: "50mb"}))


app.use('/api/post', postRoutes)
app.use('/api/dalle', dalleRoutes)

app.get("/", (req, res) => {
    res.send("Hello World!")
    }
)

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => {
            console.log("MongoDb is running on port 8080")
        })
    }catch(err){
        console.log(err)
    }
}
startServer()