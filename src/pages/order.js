import { $ } from "@wdio/globals";
import Action from "../lib/action.js";

class OrderDetailPage {

  get elementToScroll(){ return $("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup");}

  async orderForm(element, direction, times){

    await Action.scrollElement(element, direction, times);

  }

}
export default new OrderDetailPage();
