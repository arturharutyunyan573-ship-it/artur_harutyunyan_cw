import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/media', express.static('public/media'));

app.use(routes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});