const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("debe responder con Hola mundo DevOps CI/CD", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Hola mundo DevOps CI/CD");
  });
});
