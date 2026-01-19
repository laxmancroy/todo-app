import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// একটি টেস্ট রুট (Root Route)
app.get('/', (req: Request, res: Response) => {
  res.send('অভিনন্দন! আপনার টাইপস্ক্রিপ্ট সার্ভার কাজ করছে।');
});

export default app;
