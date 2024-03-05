import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const PORT = 3000;

const app = express();
// app.use(express.static('../dist'));

const filename = fileURLToPath(import.meta.url);

console.log('filename', filename);

const __dirname = dirname(filename);

console.log('__dirname', __dirname);


console.log('======>', path.join(__dirname, '../dist'));


app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/src', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening ${PORT} port`);
});
