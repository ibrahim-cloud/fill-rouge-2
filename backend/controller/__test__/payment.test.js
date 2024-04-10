const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");

// Mock stripe
jest.mock("stripe", () => () => ({
  paymentIntents: {
    create: jest.fn().mockResolvedValue({
      client_secret: "test_client_secret",
    }),
  },
}));

// Your actual router might import the stripe instance differently
// Adjust the import path as necessary
const paymentRouter = require("../payment");

const app = express();
app.use(bodyParser.json());
app.use(paymentRouter);

describe("Stripe Routes", () => {
  describe("POST /process", () => {
    it("should process payment and return client_secret", async () => {
      const response = await request(app)
        .post("/process")
        .send({ amount: 1000 }); // Adjust amount as per your logic

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.client_secret).toBe("test_client_secret");
    });
  });

  describe("GET /stripeapikey", () => {
    process.env.STRIPE_API_KEY = "test_stripe_api_key"; // Mock environment variable

    it("should return the Stripe API key", async () => {
      const response = await request(app).get("/stripeapikey");

      expect(response.statusCode).toBe(200);
      expect(response.body.stripeApikey).toBe("test_stripe_api_key");
    });
  });
});
