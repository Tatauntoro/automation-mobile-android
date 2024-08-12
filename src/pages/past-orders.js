import { $ } from "@wdio/globals";
import Action from "../lib/action.js";
import data from "../support/data.js";

class PastOrderPage{

    // Select Past Order
    get newTextHeader () { return $("(//android.widget.TextView[@text=\"New\"])[1]");}
    get gotSurgeIcon () {return $("//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ImageView");}
    get pastOrderText () { return $("~, Past Orders, ");}
    get pastOrderHeader () { return $("//android.view.ViewGroup[@content-desc=\"\"]");}
    get selectDate () { return $("//android.widget.TextView[@text=\"Select date\"]");}
    get currentDate () { return $("//android.widget.TextView[@text=\"Today\"]");}
    get firstOrder () { return $("(//android.widget.TextView[@text=\"  AUTOMATION TEST M03\"])[1]");}

    async viewPastOrder (){
        await Action.waitForDisplayed(this.newTextHeader);
        await Action.waitForDisplayed(this.gotSurgeIcon);
        await Action.click(this.gotSurgeIcon);
        await Action.waitForDisplayed(this.pastOrderText);
        await Action.click(this.pastOrderText);
        await Action.waitForDisplayed(this.pastOrderHeader);
        await Action.waitForDisplayed(this.selectDate);
        await Action.waitForDisplayed(this.currentDate);
        await Action.waitForDisplayed(this.firstOrder);
    }
}
export default new PastOrderPage();