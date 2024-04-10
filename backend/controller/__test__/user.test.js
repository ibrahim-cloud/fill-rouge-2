const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");

// Mock dependencies
jest.mock("../../model/user.js");
jest.mock("fs", () => ({
  existsSync: jest.fn().mockReturnValue(true), // Mock it to always return true, adjust according to your needs
}));
jest.mock("../../utils/jwtToken.js", () =>
  jest.fn((user, statusCode, res) => {
    res.status(statusCode).json({ success: true, token: "fakeJwtToken" });
  })
);

const User = require("../../model/user");
const userRoutes = require("../user"); // Adjust the import path

const app = express();
app.use(bodyParser.json());
app.use(userRoutes);

describe("User Controller", () => {
  beforeAll(() => {
    User.findOne.mockResolvedValue(null); // Assume no user exists initially
    User.create.mockImplementation((user) => Promise.resolve(user)); // Simulate successful user creation
  });

  describe("POST /create-user", () => {
    it("should successfully create a user and return 201", async () => {
      const userData = {
        name: "Test User",
        email: "test@example.com",
        password: "password123",
      };

      const response = await request(app)
        .post("/create-user")
        .field("name", userData.name)
        .field("email", userData.email)
        .field("password", userData.password)

      expect(response.statusCode).toBe(201);
      expect(response.body.success).toBeTruthy();
      expect(response.body.token).toBeDefined();
    });
  });
});
