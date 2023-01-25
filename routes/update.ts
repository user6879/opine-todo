import { app } from "../config/mod.ts";
import { updateTODO } from "../models/mod.ts";

app.post("/todo/update/:id", (req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;
  let data = updateTODO(id, title, body);
  res.send({ "message": "TODO has been updated successfully." });
});
