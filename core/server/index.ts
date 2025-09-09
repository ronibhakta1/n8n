import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import v1Routes from '../server/routes/v1/index.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', v1Routes);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
