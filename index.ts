import { Elysia } from "elysia";

const port = 80;

new Elysia()
  .get("/", () => "Hello")
  .get("/about", () => "About")
  .listen(port);

console.log(`http://localhost:${port}`);
