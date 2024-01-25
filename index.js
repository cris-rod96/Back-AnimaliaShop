import server from "./src/server.js";
import { connectDB } from "./src/database/db.js";
const { PORT } = process.env;

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening in PORT: ${PORT}`);
    });
  })
  .catch((err) => console.log("Error en la conexion: ", err));
