import LoginPage from "../pages/login.js";
import PastOrderPage from "../pages/past-orders.js";
import data from "../support/data.js";

describe("Order Execution - Completed Order", () => {

    it("Login with valid credentials", async() => {
      await LoginPage.loginValid(data.credentials.validEmail, data.credentials.validPassword);
    });

    it("Validate Past Order is Exist", async() => {
        await PastOrderPage.viewPastOrder();
      });
});   