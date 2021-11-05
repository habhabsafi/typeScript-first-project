

function ClassTemplate(element: string) {
    return function (constructor: any) {
        let person = new constructor();

        let template = `<h1>${person.name}</h1>
        <h2>${person.lastName}</h2>
        `
        document.querySelector(element)!.innerHTML = template;

    }
}
function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function <T extends { new(...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}
function ClassAdvancedTemplate(template: string, hookId: string) {

    console.log("Advance Template Factory")
    //this whole thing make the decorator be executed on initiation 
    return function <T extends {
        new(...args: any[]): {
            id: number,
            name: string, lastName: string
        }
    }>(originalConstructor: T) {
        return class extends originalConstructor {

            constructor(..._: any[]) {
                super();
                console.log("Rendering Template");
                const hookEl = document.getElementById(hookId);
                let personBlockSelector = `person-block-${this.id}`

                hookEl!.innerHTML = `<div id=${personBlockSelector} ></div>`
                if (hookEl) {
                    hookEl.querySelector(`#${personBlockSelector}`)!.innerHTML = template;
                    hookEl.querySelector(`#${personBlockSelector} h1`)!.textContent = this.name;
                    hookEl.querySelector(`#${personBlockSelector} h2`)!.textContent = this.lastName;
                }
            }
        }
    }
}
//@ points at the decorator

@ClassTemplate("#PersonDiv")
@WithTemplate('<h1>My Person Object</h1>', 'PersonComponentDiv')
class Person {
    name: string;
    id: number;
    lastName: string;

    constructor(id: number, name: string, lastName: string) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        console.log("Creating person object....")
    }
}

const safi = new Person(5, "Safi", "Habhab");
// const person = new Person();

// console.log(person);