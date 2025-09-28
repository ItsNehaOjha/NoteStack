import express from 'express';
    import {connectDB} from './config/db.js';
    import dotenv from 'dotenv';
    import notesRoutes from './routes/notesRoutes.js';
    import rateLimiter from './middleware/rateLimiter.js';
    import cors from 'cors';

    dotenv.config();
    const PORT = process.env.PORT || 5001;
    const app = express();

    // Middleware
    app.use(cors({
        origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
        credentials: true
    }));
    app.use(express.json());
    app.use(rateLimiter);  // Apply rate limiter middleware
    app.use('/api/notes', notesRoutes);

    
    connectDB().then(() => app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    }));



