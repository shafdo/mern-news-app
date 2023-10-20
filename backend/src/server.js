import express from 'express';
import config from './config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(config.PORT, () => {
  console.log('Server is listening on port 3000');
});
