import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';
import { rateLimit } from 'express-rate-limit'
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";
import logger from './utils/services/logger.service'
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})

// Create Express server
const app = express(); // New express instance
const port = 3000; // Port number

// Apply the rate limiting middleware to all requests.
app.use(limiter)

// Express configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
// app.use(morgan('dev')); // Enable Morgan
// Let's have Morgan chat through Winston, for a unified voice
app.use(morgan('combined', { stream: { write: message => logger.info(message) } }));
app.use(express.json()); // <=== Enable JSON body parser

// Define Express routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Use routes
app.use('/', router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

// Start Express server
app.listen(port, () => {
	// Callback function when server is successfully started
	logger.info(`Server1 started at http://localhost:${port}`);
});

// Export Express app
export default app;