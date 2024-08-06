import { $ } from '@wdio/globals'
import Action from '../lib/action.js'

class LoginPage {

  get emailInput() { return $('//android.widget.EditText[@text="Enter your email"]'); }
  get passwordInput() { return $('//android.widget.EditText[@text="Enter your password"]'); }
  get loginButton() { return $('~Log in'); }
  get allowPermissionPopUp() { return $('//android.widget.LinearLayout[@resource-id="com.android.permissioncontroller:id/content_container"]/android.widget.LinearLayout');}
  get allowPermissionButton() { return $('id=com.android.permissioncontroller:id/permission_allow_button');}
  get firstOrder(){ return $('//android.widget.TextView[@text="  AUTOMATION TEST M03"]')};

  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await Action.click(this.loginButton);
    //   if (this.allowPermissionPopUp.isExisting()){
    //     await Action.waitForDisplayed(this.allowPermissionButton);
    //     await Action.click(this.allowPermissionButton);
    // }
    await Action.waitForDisplayed(this.firstOrder);
  }
}

export default new LoginPage();
