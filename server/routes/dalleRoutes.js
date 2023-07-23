const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")
const cloudinary = require("cloudinary").v2

const { Configuration, OpenAIApi } = require("openai");


const config = new Configuration({
    organization: process.env.OPEN_AI_ORGANIZATION,
    apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(config);

const router = express.Router()
router.route('/').get((req, res) => {
    res.send("Hello from Dalle!")
})

const postRoutes = require('./postsRoutes')




router.route('/').post(async (req, res) => {

    // const prompt = await postRoutes(req.body) 
    const {prompt} = req.body
    try {
        const response = await openai.createImage({
            prompt:  prompt,
            max_tokens: 100,
            n: 1,
            size: '1024x1024',
            response_format: "b64_json",
            temperature: 0.8,
          });
        const image = response.data.data[0].b64_json;
        res.status(200).json({photo: image})

    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response.data.error.message)
    }
    
})


module.exports = router




