import { app } from "../config/mod.ts"
import { deleteTODO } from "../models/mod.ts"

app.get("/todo/delete/:id", (req, res) => {
    let data = deleteTODO(req.params.id);
    res.send({"message":"TODO has been deleted succesfully!"});
})