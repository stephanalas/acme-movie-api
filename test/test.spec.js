const { expect } = require("chai");

const app = require("supertest")(require("../app"));

describe("Routes", () => {
  describe("GET /", () => {
    it("get route exist", async () => {
      const respone = await app.get("/");
      expect(respone.status).to.equal(200);
    });
  });
});
