// function abc(document:any){
//     console.log(document)
// }

// let number: number[] = [1,2,"3"];

// let a: [number, string] = [1, "joy"];
// a.push(3); //gap in ts
// console.log(a);

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

function calculateTax(income: number, taxYear = 2022): number { //"noImplicitReturns": true: so it shows warning on implicitely return value
    let x=10; //"noUnusedParameters": true: shows warning on unused variables
    if (taxYear>2022)
        return income * 1.2;
    return income * 1.3;
}

//"noUnusedParameters": true: in-case of parameters not used
// taxYear?: number //in-case of no parameter is passed