 


// import express from 'express';
// import cors from 'cors';
// import homeRouter from './routes/homeRoutes.js';
// import queryformrouter from './controllers/aboutUs/queryFormData.js';
// import router from './routes/dataRoute.js';
// import { conn } from './connection.js';

// const app = express();

// // Middleware
// app.use(express.json()); // Parse JSON bodies
// app.use(cors()); // Enable CORS

// // Routes
// app.use(homeRouter);
// app.use(queryformrouter);
// app.use(router);

// // Start server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server running @ http://localhost:${PORT}`);
// });
import express from 'express';
import cors from 'cors';
import homeRouter from './routes/homeRoutes.js';
import queryformrouter from './controllers/aboutUs/queryFormData.js';
import router from './routes/dataRoute.js';
import { conn } from './connection.js';

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Routes
// app.use(homeRouter);
// app.use(queryformrouter);
// app.use(router);

router.get('/', (req, res) => {
  res.send('This is an example route');
});

// Listen on the port provided by Vercel
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running @ http://localhost:${PORT}`);
});