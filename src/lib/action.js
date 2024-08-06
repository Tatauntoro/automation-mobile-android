class Action {
  async click(element) {
    await element.waitForDisplayed();
    await element.click();
  }

  async setValue(element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
  }

  async getText(element) {
    await element.waitForDisplayed();
    return await element.getText();
  }

  async waitForDisplayed(element){
    await element.waitForDisplayed();
  }

  async scrollElement(selector, direction, times) {
    const location = await selector.getLocation();
    const size = await selector.getSize();
    const startX = location.x + size.width / 2;
    const startY = location.y + size.height / 2;
    let endX, endY;

    switch (direction) {
    case "up":
      endX = startX;
      endY = startY - size.height / 2;
      break;
    case "down":
      endX = startX;
      endY = startY + size.height / 2;
      break;
    default:
      throw new Error(`Invalid scroll direction: ${direction}`);
    }

    for (let i = 0; i < times; i++) {
      await driver.performActions([
        {
          type: "pointer",
          id: "finger",
          parameters: { pointerType: "touch" },
          actions: [
            { type: "pointerMove", duration: 0, x: startX, y: startY },
            { type: "pointerDown", button: 0 },
            { type: "pause", duration: 100 },
            { type: "pointerMove", duration: 300, x: endX, y: endY },
            { type: "pointerUp", button: 0 },
          ],
        },
      ]);
      await driver.pause(500); // Optional: Pause between scrolls for stability
    }
  }
}

export default new Action();
