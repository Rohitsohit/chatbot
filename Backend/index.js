const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

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

    res.json({ message: 'Hi, how can i help you...' });
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
            headers: { Authorization: `Bearer EIluG3CBNpn0b1azVnx4kswq2SPVEQ2GIclPYtjy` }
        });

        // const botMessage = response.data.generations[0].text.trim();
        res.json({ message: response.data.text });
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
            prompt: `Generate ${numberOfQuestions} quiz questions based on the following data: ${customData} in the json format as like this${jsonFormat}`,
            model: 'command-r-plus',
            max_tokens: 150 * numberOfQuestions, // Adjust max_tokens based on number of questions
        }, {
            headers: { Authorization: `Bearer EIluG3CBNpn0b1azVnx4kswq2SPVEQ2GIclPYtjy` }
        });
        let input = response.data.text
        
        // Extract JSON using string methods
        const startIndex = input.indexOf('```json\n') + 8; // 8 is the length of '```json\n'
        const endIndex = input.indexOf('\n```', startIndex);
        const jsonString = input.substring(startIndex, endIndex);

        try {
            const jsonData = JSON.parse(jsonString);
            res.json({ jsonData });
            // console.log(jsonData);
        } catch (error) {
            console.error('Failed to parse JSON:', error);
        }
        // parseQuiz(response.data.text)
        // const questions = response.data.generations.map(gen => {
        //     return {
        //         question: gen.text.question,
        //         options: gen.text.options,
        //         correctAnswer: gen.text.correctAnswer,
        //     };
        // });
        // console.log(questions)
        // res.json({ questions });
    } catch (error) {
        console.error('Error with Cohere API:', error);
        res.status(500).json({ message: 'Error processing your request.' });
    }
});

function parseQuiz(text) {
    const questions = text.split('\n\n').filter(q => q.trim().length > 0);
    const answersSection = questions.pop();
    const answers = answersSection.split('\n').slice(1).map(line => line.split('. ')[1].split(') ')[0]);

    const quiz = questions.map((question, index) => {
        const lines = question.split('\n').filter(line => line.trim().length > 0);
        const questionText = lines[0];
        const options = lines.slice(1).map(line => line.split(') ')[1]);
        const correctAnswer = options[answers[index].charCodeAt(0) - 65];

        return {
            question: questionText,
            options: options,
            correctAnswer: correctAnswer,
        };
    });
    console.log(quiz)
    return quiz;
}





const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
