import express, { Application } from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use('/api/auth', authRoutes);

export default app;