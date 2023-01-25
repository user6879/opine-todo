import { app } from "./config/mod.ts";
import "./routes/mod.ts";
import "./models/mod.ts";

app.listen(3000, () => console.log("http://localhost:3000/"));
