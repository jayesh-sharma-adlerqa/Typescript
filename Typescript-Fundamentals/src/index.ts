// function abc(document:any){
//     console.log(document)
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------

//ARRAYS:

// let number: number[] = [1,2,"3"];

// let a: [number, string] = [1, "joy"];
// a.push(3); //gap in ts
// console.log(a);

// --------------------------------------------------------------------------------------------------------------------------------------------------

//ENUMS:

// const enum Size { Small = 1, Medium, Large} //this will become { Small = 1, Medium = 2, Large = 3} //default { Small = 0, Medium = 1, Large = 2, ... }
// const mySize: Size= Size.Medium;
// console.log(mySize);

//enum Size { Small = 1, Medium, Large}
// var Size;
// (function (Size) {
//     Size[Size["Small"] = 1] = "Small";
//     Size[Size["Medium"] = 2] = "Medium";
//     Size[Size["Large"] = 3] = "Large";
// })(Size || (Size = {}));
// const mySize = Size.Medium;
// console.log(mySize);

// const enum Size { Small = 1, Medium, Large} //should generate more optimized code, though in this case it didn't
// const mySize: Size= Size.Medium;
// console.log(mySize); 

// --------------------------------------------------------------------------------------------------------------------------------------------------

//FUNCTIONS:

// function calculateTax(income: number, taxYear = 2022): number { //"noImplicitReturns": true: so it shows warning on implicitely return value
//     let x=10; //"noUnusedParameters": true: shows warning on unused variables
//     if (taxYear>2022)
//         return income * 1.2;
//     return income * 1.3;
// }

//"noUnusedParameters": true: in-case of parameters not used
// taxYear?: number //in-case of no parameter is passed

// --------------------------------------------------------------------------------------------------------------------------------------------------

//OBJECTS:

// let employee: {
//     readonly id: number, //redonly prevent modification of values
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: "Joy",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }; //cannot add additional property to object or have lesser number of property while initializinglet employee: {

// employee.id = 2;

// --------------------------------------------------------------------------------------------------------------------------------------------------

//ADVANCE OBJECTS:
//1. TYPE ALIASES- Used to provide same structure to multiple objects
// type Employee={
//     id: number,
//     name: string,
//     retire: (date: Date) => void
// } 

// let employee: Employee= {
//     id: 1,
//     name: "Joy",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };

//------------------------------------------------------------------------

//2. UNION TYPES- Used to provide parameter more than one type
// function kgToLbs(weight: number | string): number {
// weight. //Here we only see property which are common for both string and number in suggestion
// Narrowing
// if(typeof weight === "number")
// return weight * 2.2; //now we see suggestion only for number related methods
// else
// return parseInt(weight) * 2.2; //now we see suggestion only for string related methods
// };

// kgToLbs(10);
// kgToLbs("10");

//------------------------------------------------------------------------

//3. INTERSACTION TYPES- Used to combine types
// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void
// };

// type Uiwidget = Draggable & Resizable;

// let textBox: Uiwidget = {
//     drag: () => {},
//     resize: () => {}
// };

//------------------------------------------------------------------------

//4. LITERAL TYPES- to limit the values to be assigned
// type Quantity= 50 | 100;
// let quantity: Quantity= 51;

// type Metric= 'cm' | 'inch';

//------------------------------------------------------------------------

//5. NULLABLE TYPES- unions that include null and undefined
// function greet(name: string | null | undefined){
//     if(name)
//         console.log(name);
//     else
//         console.log("hola");
// };

// greet(undefined);

//------------------------------------------------------------------------------------------------------------------------------------------------

//OPTIONAL CHAINING:
// type Customer = {
//     birthday?: Date
// }
// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(0);
// optional property access operator
// console.log(customer?.birthday?.getFullYear());

// optional element access operator
// customer.?[0]

// optional call
let log:any = null;
log?.('a');