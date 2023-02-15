import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 8080,
    host: "192.168.3.13",
  })
  .then(() => {
    console.log(`HTTP Server running! in port 8080`);
  });
