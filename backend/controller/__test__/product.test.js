const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");

jest.mock("../../model/product.js", () => ({
  find: jest.fn().mockReturnThis(), // Mock find to return an object that includes the sort method
  sort: jest.fn().mockResolvedValue([
    {
      _id: "product1Id",
      name: "Product 1",
      description: "Description of product 1",
      discountPrice: 100,
      stock: 10,
      images: ["image1.jpg"],
      shopId: "shop1Id",
      createdAt: new Date(),
    },
    {
      _id: "product2Id",
      name: "Product 2",
      description: "Description of product 2",
      discountPrice: 150,
      stock: 5,
      images: ["image2.jpg"],
      shopId: "shop2Id",
      createdAt: new Date(),
    },
  ]), // Ensure the sort mock resolves to your mock data
}));

const app = express();
app.use(bodyParser.json());

const productRoutes = require("../product");
app.use(productRoutes);

describe("Product Controller", () => {
  describe("GET /get-all-products", () => {
    it("should return all products and a status of 201", async () => {
      const response = await request(app).get("/get-all-products");
      expect(response.statusCode).toBe(201);
      expect(response.body.success).toBeTruthy();
      expect(response.body.products.length).toBe(2);
      expect(response.body.products[0].name).toBe("Product 1");
      expect(response.body.products[1].name).toBe("Product 2");
    });
  });
});
