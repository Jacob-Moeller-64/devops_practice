const request = require("supertest");
const app = require("./app");

describe("API Endpoints", () => {
  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Hello from DevSecOps Pipeline!");
    expect(response.body.version).toBe("1.0.0");
  });

  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
    expect(response.body.uptime).toBeGreaterThanOrEqual(0);
  });
});
