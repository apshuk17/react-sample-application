import express from "express";
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

const PORT = 8000;

// Declare public directory
app.use(express.static("public"));

// Home route
app.get("*", (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
