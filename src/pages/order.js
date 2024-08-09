import { $ } from "@wdio/globals";
import Action from "../lib/action.js";
import data from "../support/data.js";

class OrderDetailPage {

  // Select and Accept First Order
  get firstOrder(){ return $("//android.widget.TextView[@text=\"  AUTOMATION TEST M03\"]");}
  get firstOrderDetails(){ return $("//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]");}
  get driveInstruction1(){ return $("(//android.widget.TextView[@text=\"QA TESTER - M03\"])[1]");}
  get driveInstruction2(){ return $("(//android.widget.TextView[@text=\"QA TESTER - M03\"])[2]");}
  get acceptButton (){return $("~, Accept");}
  get confirmPopUp(){ return $("//android.widget.TextView[@text=\"Confirm order acceptance?\"]");}
  get confirmBtn(){ return $("~Confirm");}
  get orderConfirmedPopup(){ return $("//android.widget.TextView[@text=\"Order confirmed\"]");}
  get okButton(){ return $("~OK");}

  // Assigned to Driver
  get orderTab(){ return $("//android.widget.TextView[@text=\"Orders\"]");}
  get assignTab(){ return $("//android.widget.TextView[@text=\"Assign\"]");}
  get pickUpTab(){ return $("//android.widget.TextView[@text=\"Pick Up\"]");}
  get deliverTab(){ return $("//android.widget.TextView[@text=\"Deliver\"]");}
  get assignBtn(){ return $("~Assign");}
  get driverList(){ return $("//android.widget.TextView[@text=\"tata\"]");}
  get checklisted(){ return $("//android.widget.TextView[@text=\"\"]");}
  get assignBtnDriver(){ return $("//android.view.ViewGroup[@content-desc=\"Assign\"]");}
  get driverAssigned(){ return $("//android.widget.TextView[@text=\"Driver assigned\"]");}
  get okBtn(){ return $("//android.view.ViewGroup[@content-desc=\"OK\"]");}
  get elementToScroll(){ return $("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup");}

  // Pick Up Driver
  get fieldName(){ return $("//android.widget.EditText[@text=\"Tata\"]");}
  get confirmPickUpbtn(){ return $("//android.widget.TextView[@text=\"Confirm Pickup\"]");}
  get confirmationPopUp(){ return $("//android.widget.TextView[@text=\"Confirm pickup?\"]");}
  get yesButton(){ return $("~Yes");}
  get pickUpConfirmedPopUp(){ return $("//android.widget.TextView[@text=\"Pickup confirmed\"]");}

  // Delivery Order - Completed Order
  get deliverTab(){ return $("//android.widget.TextView[@text=\"Deliver\"]");}
  get pickUpSuccess(){ return $("//android.widget.TextView[@text=\"Pickup Successful\"]");}
  get toDeliver(){ return $("//android.widget.TextView[@text=\"To Deliver\"]");}
  get emptyFieldName(){ return $("//android.widget.EditText[@text=\"Name\"]");}
  get confDelButton(){ return $("~, Confirm Delivery");}
  get confDelPopUp(){ return $("//android.widget.TextView[@text=\"Confirm delivery?\"]");}
  get finalPopUp(){ return $("//android.widget.TextView[@text=\"Delivery confirmed\"]");}
  get backToHomeBtn(){ return $("//android.widget.TextView[@text=\"Back to Home\"]");}

  // Delivery Order - Unsuccessfull Delivery
  get unSuccessBtn1(){ return $("~, Unsuccessful");}
  get reasonText(){ return $("//android.widget.TextView[@text=\"Reason *\"]");}
  get reasonField(){ return $("//android.widget.EditText[@text=\"Enter a reason...\"]");}
  get unSuccessBtn2(){ return $("~Confirm Unsuccessful");}
  
  
  async selectFirstOrder (){
    await Action.waitForDisplayed(this.firstOrder);
    await Action.click(this.firstOrder);
  }

  async acceptFirstOrder (){
    await Action.waitForDisplayed(this.firstOrderDetails);
    //await Action.expectToHaveText(await this.firstOrderDetails, "AUTOMATION TEST M03");
    await Action.expectToHaveText(await this.driveInstruction1, "QA TESTER - M03");
    await Action.expectToHaveText(await this.driveInstruction2, "QA TESTER - M03");
    await Action.waitForDisplayed(this.acceptButton);
    await Action.click(this.acceptButton);
    await Action.waitForDisplayed(this.confirmPopUp);
    await Action.waitForDisplayed(this.confirmBtn);
    await Action.click(this.confirmBtn);
    await Action.waitForDisplayed(this.orderConfirmedPopup);
    await Action.waitForDisplayed(this.okButton);
    await Action.click(this.okButton);
  }

  async assignedToDriver (){
    await Action.waitForDisplayed(this.orderTab);
    await Action.click(this.orderTab);
    await Action.waitForDisplayed(this.assignTab);
    await Action.waitForDisplayed(this.pickUpTab);
    await Action.waitForDisplayed(this.deliverTab);
    await Action.waitForDisplayed(this.firstOrder);
    await Action.click(this.firstOrder);
    await Action.waitForDisplayed(this.assignBtn);
    await Action.click(this.assignBtn);
    await Action.waitForDisplayed(this.driverList);
    await Action.click(this.driverList);
    await Action.waitForDisplayed(this.checklisted);
    await Action.waitForDisplayed(this.assignBtnDriver);
    await Action.click(this.assignBtnDriver);
    await Action.waitForDisplayed(this.driverAssigned);
    await Action.waitForDisplayed(this.okBtn);
    await Action.click(this.okBtn);
  }

  async pickedUpDriver (){
    //await Action.waitForDisplayed(this.orderTab);
    //await Action.click(this.orderTab);
    await Action.waitForDisplayed(this.pickUpTab);
    await Action.click(this.pickUpTab);
    await Action.waitForDisplayed(this.firstOrder);
    await Action.click(this.firstOrder);
    await Action.waitForDisplayed(this.driverList);
    await Action.scrollElement(this.elementToScroll, "up", 1);
    await Action.waitForDisplayed(this.fieldName);
    await Action.expectToHaveText(await this.fieldName, "Tata");
    await Action.waitForDisplayed(this.confirmPickUpbtn);
    await Action.click(this.confirmPickUpbtn);
    await Action.waitForDisplayed(this.confirmationPopUp);
    await Action.waitForDisplayed(this.yesButton);
    await Action.click(this.yesButton);
    await Action.waitForDisplayed(this.pickUpConfirmedPopUp);
    await Action.waitForDisplayed(this.okBtn);
    await Action.click(this.okBtn);
  }

  async completedOrder (){
    await Action.waitForDisplayed(this.deliverTab);
    await Action.click(this.deliverTab);
    await Action.waitForDisplayed(this.firstOrder);
    await Action.click(this.firstOrder);
    await Action.waitForDisplayed(this.pickUpSuccess);
    await Action.waitForDisplayed(this.toDeliver);
    await Action.scrollElement(this.elementToScroll, "up", 1);
    await Action.waitForDisplayed(this.emptyFieldName);
    await Action.setValue(await this.emptyFieldName, data.releasedTo.name);
    await Action.expectToHaveText(await this.fieldName, "Tata");
    await Action.waitForDisplayed(this.confDelButton);
    await Action.click(this.confDelButton);
    await Action.waitForDisplayed(this.confDelPopUp);
    await Action.waitForDisplayed(this.yesButton);
    await Action.click(this.yesButton);
    await Action.waitForDisplayed(this.finalPopUp);
    await Action.waitForDisplayed(this.backToHomeBtn);
    await Action.click(this.backToHomeBtn);
  }

  async unsuccessfullDelivery (){
    await Action.waitForDisplayed(this.deliverTab);
    await Action.click(this.deliverTab);
    await Action.waitForDisplayed(this.firstOrder);
    await Action.click(this.firstOrder);
    await Action.waitForDisplayed(this.pickUpSuccess);
    await Action.waitForDisplayed(this.toDeliver);
    await Action.scrollElement(this.elementToScroll, "up", 1);
    await Action.waitForDisplayed(this.emptyFieldName);
    await Action.setValue(await this.emptyFieldName, data.releasedTo.name);
    await Action.expectToHaveText(await this.fieldName, "Tata");
    await Action.waitForDisplayed(this.unSuccessBtn1);
    await Action.click(this.unSuccessBtn1);
    await Action.waitForDisplayed(this.reasonText);
    await Action.waitForDisplayed(this.reasonField);
    await Action.setValue(await this.reasonField, data.reasonBox.reason);
    await Action.waitForDisplayed(this.unSuccessBtn2);
    await Action.click(this.unSuccessBtn2);
  }

}
export default new OrderDetailPage();
