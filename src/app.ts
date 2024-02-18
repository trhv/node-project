import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';


// Create Express server
const app = express(); // New express instance
const port = 3000; // Port number

// Express configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(morgan('dev')); // Enable Morgan
app.use(express.json()); // <=== Enable JSON body parser


console.log("arye")
// Define Express routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use routes
app.use('/', router);

// Start Express server
app.listen(port, () => {
  // Callback function when server is successfully started
  console.log(`Server1 started at http://localhost:${port}`);
});

// Export Express app
export default app;