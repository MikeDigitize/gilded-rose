const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });
  it("should degrade conjured items twice as fast", function() {
    const gildedRose = new Shop([new Item("Conjured", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });
});
