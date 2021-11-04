//decorators are all about classes
//decorator is not just a function
//usually decorators are written in pascal case
//decorators recieve arguments, how many ? depends on where you use decorators
//decorators are executed when the class is defined and not when initiated
//decoratos allow you to do extra behind the scenes set up work when the class is defined
//they are not event listners, however they can be used like that if customized , but not their core role

//not the only way we can create a decorator
//the problem in class  decorator that it can only accept one argument 
//when pointed above the class which will be the constructor of the class
function LogClass(logString: string) {
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    //new(...args: any[]) means that t will be an object( which will be the constructor of the class)
    //and it may accept unknwon count of args
    /*: { name: string } }
    this means that the consumed class will have a name property*/
    //decorators are capable of returning something
    //the return here returns , not the first one above
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        return class extends originalConstructor {
            //...args:any[] to initiate an object with any number of args we want
            //we are adding behavior(code) to the original constructor of the class
            //so this behavior will be executed execusivly by this decorator
            //other behavors may be executed by other decorators
            //..._ i am not using the parameters of the constructor
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

// @Logger('LOGGING - PERSON')
@LogClass('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);

// ---

