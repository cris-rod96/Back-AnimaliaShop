import mongoose from "mongoose";
const { connect, connection } = mongoose;

const { MONGO_URI } = process.env;

const connectionInstance = {
  isConnected: false,
};

export async function connectDB() {
  if (connectionInstance.isConnected) return;
  const conn = await connect(MONGO_URI);

  console.log("Conectado a:", conn.connection.db.databaseName);
  connectionInstance.isConnected = conn.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Conexión exitosa");
});
