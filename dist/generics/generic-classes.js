"use strict";
class PrimitiveDataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        const itemIndex = this.data.indexOf(item);
        if (itemIndex > -1)
            this.data.splice(itemIndex, 1);
    }
    getItems() {
        return this.data;
    }
}
let textStorage = new PrimitiveDataStorage();
textStorage.addItem("Safi");
textStorage.addItem("Maxim");
textStorage.addItem("Walid");
console.log({ textStorageItems: textStorage.getItems() });
textStorage.removeItem("Maxim");
console.log({ textStorageItems: textStorage.getItems() });
let numberStorage = new PrimitiveDataStorage();
numberStorage.addItem(5);
numberStorage.addItem(6);
numberStorage.addItem(7);
console.log({ numberStorageItems: numberStorage.getItems() });
numberStorage.removeItem(8);
console.log({ numberStorageItems: numberStorage.getItems() });
//# sourceMappingURL=generic-classes.js.map