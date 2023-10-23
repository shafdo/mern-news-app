import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './config';
import apiRoutes from './routes';
import connectDB from './database';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Routes
app.use('/api', apiRoutes);
connectDB();

app.listen(config.PORT, () => {
  console.log('Server is listening on port 3000');
});
