import { ratelimit } from '../config/upstash.js';

const rateLimiter = async (req, res, next) => {
  try {
    const identifier = req.ip; // Use IP as identifier
    const { success } = await ratelimit.limit(identifier);
    
    if (!success) {
      return res.status(429).json({ 
        message: 'Too many requests, please try again later.' 
      });
    }
    next();
  } catch (error) {
    console.error('Rate Limiter Error:', error);
    // On rate limiter error, let the request through
    next();
  }
};

export default rateLimiter;