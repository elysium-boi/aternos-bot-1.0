const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Afk bot is running!'));
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

function keep_alive() {
  app.listen(port, '0.0.0.0', () => console.log(`Afk bot is listening on http://0.0.0.0:${port}`));
}

module.exports = { keep_alive };
