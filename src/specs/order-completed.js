import LoginPage from '../pages/login.js';
import OrderDetailPage from '../pages/order.js';
import data from '../support/data.js';

describe('Order Execution - Completed Order', () => {

    it('Login with valid credentials', async() => {
        await LoginPage.login(data.credentials.validEmail, data.credentials.validPassword);
    });

    it('Select and Accept Order', async()=>{
        
        const firstOrder = await $('//android.widget.TextView[@text="  AUTOMATION TEST M03"]');
        const orderDetails = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]');
        const driveInstruction1 = await $('(//android.widget.TextView[@text="QA TESTER - M03"])[1]');
        const driveInstruction2 = await $('(//android.widget.TextView[@text="QA TESTER - M03"])[2]');
        const acceptBtn = $('~, Accept');
        const confirmPopUp = await $('//android.widget.TextView[@text="Confirm order acceptance?"]');
        const confirmBtn = await $('~Confirm');
        const orderConfirmedPopup = await $('//android.widget.TextView[@text="Order confirmed"]');
        const okButton = await $('~OK');

        await expect(firstOrder).toBeDisplayed();
        await firstOrder.click();
        await expect(orderDetails).toBeDisplayed();
        await expect(driveInstruction1).toHaveText('QA TESTER - M03');
        await expect(driveInstruction2).toHaveText('QA TESTER - M03');
        await expect(acceptBtn).toBeDisplayed();
        await acceptBtn.click();
        await expect(confirmPopUp).toBeDisplayed();
        await expect(confirmBtn).toBeDisplayed();
        await confirmBtn.click();
        await expect(orderConfirmedPopup).toBeDisplayed();
        await expect(okButton).toBeDisplayed();
        await okButton.click();
        
    });

    it('Assigne to Driver', async()=>{

        const orderTab = await $('//android.widget.TextView[@text="Orders"]');
        const assignTab = await $('//android.widget.TextView[@text="Assign"]');
        const pickUpTab = await $('//android.widget.TextView[@text="Pick Up"]');
        const deliverTab = await $('//android.widget.TextView[@text="Deliver"]');
        const assignBtn = await $('~Assign');
        const driverList = await $('//android.widget.TextView[@text="tata"]');
        const checklisted = await $('//android.widget.TextView[@text=""]');
        const assignBtnDriver = await $('//android.view.ViewGroup[@content-desc="Assign"]');
        const driverAssigned = await $('//android.widget.TextView[@text="Driver assigned"]');
        const okBtn = await $('//android.view.ViewGroup[@content-desc="OK"]');
        const firstAssign = await $('//android.widget.TextView[@text="  AUTOMATION TEST M03"]');


        await expect(orderTab).toBeDisplayed();
        await orderTab.click();
        await expect(assignTab).toBeDisplayed();
        await expect(pickUpTab).toBeDisplayed();
        await expect(pickUpTab).toBeDisplayed()
        await expect(deliverTab).toBeDisplayed();
        await expect(firstAssign).toBeDisplayed();
        await firstAssign.click();    
        await expect(assignBtn).toBeDisplayed();
        await assignBtn.click();
        await expect(driverList).toBeDisplayed();
        await driverList.click();
        await expect(checklisted).toBeDisplayed();
        await expect(assignBtnDriver).toBeDisplayed();
        await assignBtnDriver.click();
        await expect(driverAssigned).toBeDisplayed();
        await okBtn.waitForDisplayed();
        await okBtn.click();
    });

    it('Pick Up Order', async() => {

        const orderTab = await $('//android.widget.TextView[@text="Orders"]');
        const pickUpTab = await $('//android.widget.TextView[@text="Pick Up"]');
        const firstPickUpOrder = $('//android.widget.TextView[@text="  AUTOMATION TEST M03"]');
        const driverName = await $('//android.widget.TextView[@text="tata"]');
        const elementToScroll = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup');
        const fieldName = await $('//android.widget.EditText[@text="Tata"]');
        const confirmPickUpbtn = await $('//android.widget.TextView[@text="Confirm Pickup"]');
        const confirmationPopUp = await $('//android.widget.TextView[@text="Confirm pickup?"]');
        const yesButton = await $('~Yes');
        const pickUpConfirmedPopUp = await $('//android.widget.TextView[@text="Pickup confirmed"]');
        const OKbutton = await $('~OK');

        await expect(orderTab).toBeDisplayed();
        await orderTab.click();
        await expect(pickUpTab).toBeDisplayed();
        await pickUpTab.click();
        await expect(firstPickUpOrder).toBeDisplayed();
        await firstPickUpOrder.click();
        await driverName.waitForDisplayed();
        await OrderDetailPage.orderForm(elementToScroll, 'up', 1);
        await expect(fieldName).toBeDisplayed();
        await expect(fieldName).toHaveText("Tata");
        await expect(confirmPickUpbtn).toBeDisplayed();
        await confirmPickUpbtn.click();
        await expect(confirmationPopUp).toBeDisplayed();
        await expect(yesButton).toBeDisplayed();
        await yesButton.click();
        await expect(pickUpConfirmedPopUp).toBeDisplayed();
        await expect(OKbutton).toBeDisplayed();
        await OKbutton.click();
    });

    it('Complete Order', async()=>{

        const orderTab = await $('//android.widget.TextView[@text="Orders"]');
        const deliverTab = await $('//android.widget.TextView[@text="Deliver"]');
        const firstDeliverOrder = await $('//android.widget.TextView[@text="  AUTOMATION TEST M03"]'); 
        const pickUpSuccess = await $('//android.widget.TextView[@text="Pickup Successful"]');
        const toDeliver = await $('//android.widget.TextView[@text="To Deliver"]');
        const elementToScroll = await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup');
        const fieldName = await $('//android.widget.EditText[@text="Name"]');
        const confDelButton = await $('~, Confirm Delivery');
        const confDelPopUp = await $('//android.widget.TextView[@text="Confirm delivery?"]');
        const YesBtn = await $('~Yes');
        const finalPopUp = await $('//android.widget.TextView[@text="Delivery confirmed"]');
        const backToHomeBtn = await $('//android.widget.TextView[@text="Back to Home"]');

        await expect(orderTab).toBeDisplayed();
        await orderTab.click();
        await expect(deliverTab).toBeDisplayed();
        await deliverTab.click();
        await expect(firstDeliverOrder).toBeDisplayed();
        await firstDeliverOrder.click();
        await expect(pickUpSuccess).toBeDisplayed();
        await expect(toDeliver).toBeDisplayed();
        await OrderDetailPage.orderForm(elementToScroll, 'up', 1);
        await expect(fieldName).toBeDisplayed();
        await fieldName.setValue("Tata");
        await expect(fieldName).toHaveText("Tata");
        await expect(confDelButton).toBeDisplayed();
        await confDelButton.click();
        await expect(confDelPopUp).toBeDisplayed();
        await expect(YesBtn).toBeDisplayed();
        await YesBtn.click();
        await expect(finalPopUp).toBeDisplayed();
        await expect(backToHomeBtn).toBeDisplayed();
        await backToHomeBtn.click();

    });
});