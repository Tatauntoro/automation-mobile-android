import LoginPage from "../pages/login.js";
import OrderDetailPage from "../pages/order.js";
import data from "../support/data.js";

describe("Order Execution - Completed Order", () => {

  it("Login with valid credentials", async() => {
    await LoginPage.login(data.credentials.validEmail, data.credentials.validPassword);
  });

  it("Select and Accept Order", async()=>{
    await OrderDetailPage.selectFirstOrder();
    await OrderDetailPage.acceptFirstOrder();
  });

  it("Assigne to Driver", async()=>{
    await OrderDetailPage.assignedToDriver();
  });

  it("Pick Up Order", async() => {
    await OrderDetailPage.pickedUpDriver();
  });

  it("Unsuccessfull Delivery Order", async()=>{
    await OrderDetailPage.unsuccessfullDelivery();
  });

});
