import { app } from "../config/mod.ts";
import { addTODO } from "../models/mod.ts";

app.post("/create/", (req, res) => {
  const { title, body } = req.body;
  if (title && body) {
    addTODO(title, body);
    res.send(
      { message: "TODO added successfully." },
    );
  } else {
    res.send({
      message: "Not enough arguments.",
    });
  }
});
