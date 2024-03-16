import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const PORT = 3000;

const app = express();

const filename = fileURLToPath(import.meta.url);

const __dirname = dirname(filename);

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/src', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening ${PORT} port`);
});
