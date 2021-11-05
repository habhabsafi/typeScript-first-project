
function Autobind(_: any, __: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjustDescriptor;
}
class Printer {
    message = "This works!";
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}
const printer = new Printer();
const button = document.querySelector("button")!;
//we use arrow function or .bind(this) to point for this inside the class 
// button.addEventListener('click', () => {
//     printer.showMessage
// });
button.addEventListener('click', printer.showMessage);
//we can use decorator to adjust this thing: to make this bind automatically
