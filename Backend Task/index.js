import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './src/Routes/Routes.js';
import { handleIVRResponse } from './src/Services/twillo.services.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/contacts', contactRoutes);

// Twilio IVR response route
app.post('/handleResponse', handleIVRResponse);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
});
