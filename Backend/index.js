const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors =require( "cors");
const app = express();
app.use(bodyParser.json());

app.use(cors());
let customData = '';  // Variable to store custom data

// Endpoint to receive and store custom data
app.post('/api/custom-data', (req, res) => {
    customData = req.body.data;
    
    res.json({ message: 'Custom data received successfully' });
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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
