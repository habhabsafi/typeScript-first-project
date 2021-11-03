
//combine combined types
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
//the return type of this function is a union
//in this case typescript is not sure what type will be returned at the end
//so it prevent us from using string function if it returns a string and so on
//the solution is to use function overloads to treat all return scenarions
function add(a: number, b: number): number
function add(a: number, b: string): string
function add(a: string, b: number): string
function add(a: string, b: string): string
//this can work if b is optional
//function add(a:number):string
function add(a: Combinable, b: Combinable) {
    //this if is called type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Max", "Schwarz");
result.split(" ");