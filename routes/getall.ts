import { app } from "../config/mod.ts";
import { getAll } from "../models/mod.ts";

app.get("/", (req, res) => {
  const todos = getAll();

  res.send(todos);
});
