const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");

// Import the mock data
const mockOrderData = {
  cart: [
    {
      productId: "someProductId1",
      quantity: 2,
      price: 25.99,
      shopId: "someShopId1",
    },
    {
      productId: "someProductId2",
      quantity: 1,
      price: 19.99,
      shopId: "someShopId2",
    },
  ],
  shippingAddress: {
    fullName: "John Doe",
    address1: "123 Main St",
    city: "Anytown",
    postalCode: "12345",
    country: "Country",
    phone: "1234567890",
  },
  user: {
    userId: "someUserId",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  totalPrice: 71.97,
  status: "Processing",
  paymentInfo: {
    id: "somePaymentId",
    status: "Paid",
    type: "Credit Card",
  },
  paidAt: new Date(),
  createdAt: new Date(),
};

jest.mock("../../model/order.js", () => ({
  create: jest.fn().mockResolvedValue(mockOrderData),
}));

const orderRoutes = require("../order");

const app = express();
app.use(bodyParser.json());
app.use(orderRoutes);

describe("Order Controller", () => {
  describe("POST /create-order", () => {
    it("should create orders and return status 201", async () => {

      const orderRequestPayload = {
        cart: mockOrderData.cart,
        shippingAddress: mockOrderData.shippingAddress,
        user: mockOrderData.user,
        totalPrice: mockOrderData.totalPrice,
        paymentInfo: mockOrderData.paymentInfo,
      };

      const response = await request(app)
        .post("/create-order")
        .send(orderRequestPayload);

      expect(response.statusCode).toBe(201);
      expect(response.body.success).toBeTruthy();
      expect(response.body.orders).toBeDefined();
    //   expect(response.body.orders.totalPrice).toEqual(mockOrderData.totalPrice);
    });
  });
});
