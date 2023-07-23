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
    res.status(200).json({ message: 'Hello from DALL-E!' });
})

router.route('/').post(async (req, res) => {
    const {prompt} = req.body
    console.log(prompt)
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:  prompt +
              " based on the input on the left, create a funny madlib description in 1-2 sentences. the inputs shoud be the only adjectives, nounds, etc, in the description. do not wrap the answer in quotes.",
            temperature: 0.8,
          });
          const responseText = response.data.choices[0].text;
          res.status(200).send(responseText)
    } catch (error) {
        console.log(error)
    }
    
})


module.exports = router

