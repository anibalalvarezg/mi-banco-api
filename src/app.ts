import express, { Application } from 'express';
import authRoutes from './routes/auth';
import bankRoutes from './routes/bank';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/bank', bankRoutes);

export default app;