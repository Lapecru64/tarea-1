import express from "express";
import morgan from "morgan";

const PORT = 8000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/users", (req, res) => {
  const { body } = req
  res.json({ info: body });
});

app.post("/users", (req, res) => {
  const { body } = req;
  res.status(201).json({ message: 'Usuario creado', info: body });
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});