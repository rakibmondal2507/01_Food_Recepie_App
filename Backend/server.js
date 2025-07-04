import express from 'express';
import dotenv from 'dotenv';
import router from './routes/recipe';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/recipe",router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});