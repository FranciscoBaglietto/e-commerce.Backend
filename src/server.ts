import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { portDev, portTest } from './config/globals';
import { router } from './routes';

dotenv.config();

const port = process.env.NODE_ENV === 'development' ? portDev : portTest;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', router);

app.listen(port, async () => {
	console.log(`Server listening on port: ${port}`);
});