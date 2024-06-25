const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require("cors");
require('dotenv/config');

const app = express();
app.use(bodyParser.json());
const CohereKEY = process.env.CohereKEY;

app.use(cors());

let customData = '';  // Variable to store custom data

let jsonFormat = [{
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
}]

// Endpoint to receive and store custom data
app.post('/api/custom-data', (req, res) => {
    customData = req.body.data;
    res.json({ message: 'Hi, how can I help you...' });
});

// Endpoint to answer questions based on custom data
app.post('/api/message', async (req, res) => {
    const userMessage = req.body.message;
    if (!customData) {
        return res.status(400).json({ message: 'No custom data available. Please upload custom data first.' });
    }

    // Integrate with Cohere to generate response based on custom data
    try {
        const response = await axios.post('https://api.cohere.ai/generate', {
            prompt: `Context: ${customData}\nQuestion: ${userMessage}\nAnswer:`,
            model: 'command-r-plus',  // Use an appropriate model ID
            max_tokens: 150,
        }, {
            headers: { Authorization: `Bearer ${CohereKEY}` }
        });

        res.json({ message: response.data.generations[0].text.trim() });
    } catch (error) {
        console.error('Error with Cohere API:', error);
        res.status(500).json({ message: 'Error processing your request.' });
    }
});

app.post('/api/quiz', async (req, res) => {
    const { numberOfQuestions } = req.body;
    console.log(numberOfQuestions)
    if (!customData) {
        return res.status(400).json({ message: 'No custom data available. Please upload custom data first.' });
    }

    // Generate questions based on custom data
    try {
        const response = await axios.post('https://api.cohere.ai/generate', {
            prompt: `Generate ${numberOfQuestions} quiz questions based on the following data: ${customData} in the json format as like this ${jsonFormat}`,
            model: 'command-r-plus',
            max_tokens: 150 * numberOfQuestions, // Adjust max_tokens based on number of questions
        }, {
            headers: { Authorization: `Bearer ${CohereKEY}` }
        });

        let input = response.data.text
        
        // Extract JSON using string methods
        const startIndex = input.indexOf('```json\n') + 8; // 8 is the length of '```json\n'
        const endIndex = input.indexOf('\n```', startIndex);
        const jsonString = input.substring(startIndex, endIndex);

        try {
            const jsonData = JSON.parse(jsonString);
            res.json({ jsonData });
        } catch (error) {
            console.error('Failed to parse JSON:', error);
            res.status(500).json({ message: 'Error parsing JSON response from Cohere API.' });
        }
       
    } catch (error) {
        console.error('Error with Cohere API:', error);
        res.status(500).json({ message: 'Error processing your request.' });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
