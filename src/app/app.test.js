const request = require("supertest");
const app = require("./app");

describe("Test the / path", () => {
  test("It should accept GET request", async () => {
    const response1 = await request(app).get("/");
    const response2 = await request(app).get("/");
    
    expect(response1.text).toBe('<h1>Welcome back!</h1><p>This page was visited 1 time.</p>')
    expect(response2.text).toBe('<h1>Welcome back!</h1><p>This page was visited 2 times.</p>')
    expect(response1.statusCode).toBe(200);
    expect(response2.statusCode).toBe(200);
  });
});