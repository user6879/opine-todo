import { app } from "../config/mod.ts";
import { getOne } from "../models/mod.ts";

app.get("/todo/:id", (req, res) => {
  let data = getOne(req.params.id);
  if (!data) {
    res.send({ "message": `Todo with ID ${req.params.id} was not found.` });
  } else res.send(data);
});
