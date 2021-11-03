type primitiveTypes = string | number | boolean
class PrimitiveDataStorage<T extends primitiveTypes>{
    public data: T[] = [];
    public addItem(item: T) {
        this.data.push(item)
    }
    public removeItem(item: T) {
        const itemIndex = this.data.indexOf(item);
        if (itemIndex > -1)
            this.data.splice(itemIndex, 1);
    }
    public getItems() {
        return this.data
    }
}
let textStorage = new PrimitiveDataStorage<string>();
textStorage.addItem("Safi")
textStorage.addItem("Maxim")
textStorage.addItem("Walid")
console.log({ textStorageItems: textStorage.getItems() })
textStorage.removeItem("Maxim")
console.log({ textStorageItems: textStorage.getItems() })
let numberStorage = new PrimitiveDataStorage<number>();
numberStorage.addItem(5)
numberStorage.addItem(6)
numberStorage.addItem(7)
console.log({ numberStorageItems: numberStorage.getItems() })
numberStorage.removeItem(8)
console.log({ numberStorageItems: numberStorage.getItems() })