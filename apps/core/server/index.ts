import express from 'express';
import cors from 'cors';
// @ts-ignore
import dotenv from 'dotenv';
import v1Routes from './routes/v1/index';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', v1Routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
