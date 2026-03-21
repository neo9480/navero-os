// Start server
import app from "./src/app.js";
import config from "./src/config/config.js";
import prisma from "./src/db/prismaClient.js";

const PORT = config.PORT;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("connected to navero-database");

    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("failed to start server", err);
  }
}

startServer();
