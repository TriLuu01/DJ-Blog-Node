import app from "./src/app.js";

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`DJ Blog started with port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit Server`));
});
