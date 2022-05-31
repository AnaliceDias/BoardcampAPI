import dotenv from "dotenv";
import app from "./src/app/index.js"


dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Servidor no ar");
});

