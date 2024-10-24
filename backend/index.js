import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

// Endpoint to fetch color palette
app.get('/api/palette', async (req, res) => {
  try {
    const response = await fetch('http://colormind.io/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model: 'default' }),
    });

    const data = await response.json();
    res.json(data); // Send the color palette data back to the client
  } catch (error) {
    console.error('Error fetching palette:', error);
    res.status(500).send('Error fetching palette');
  }
});

app.get('/api/emojis', async (req, res) => {
  try {
    const response = await fetch('https://www.emoji.family/api/emojis');
    const data = await response.json();

    // Return the fetched emoji data to the frontend
    res.json(data);
  } catch (error) {
    console.error('Error fetching emojis:', error);
    res.status(500).send('Error fetching emojis');
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
