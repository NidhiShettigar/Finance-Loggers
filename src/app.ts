import {Invoice} from './classes/Invoice.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter';
/* Practice
const anchor = document.querySelector('a')!; //can be written without ! - i.e html identifier
console.log(anchor);  
//console.log(anchor.href);  does not work without ! in const anchor line
if(anchor){
    console.log(anchor.href); 
}

//interfaces
interface IsPerson {
    name: string;
    ae: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'seela',
    ae: 20,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {      //cannot delete spend or speak from theinterface
        console.log('I spent', amount);
        return amount;
    },
    //skill: []  cannot add anyting extra 
};
console.log(me);

const greetPerson = (person: IsPerson) => {
    console.log('My age is', person.ae);
}
//greetPerson({67}); must match the IsPerson interface
greetPerson(me);

//classes
class Invoice{
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes Rs${this.amount} for ${this.details}`;
    }
}
// shorthand for classes only when we have modifiers along with variables
class Invoice{ 
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes Rs${this.amount} for ${this.details}`;
    }
}


let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('orio', 'web work', 250);
docTwo = new Payment('Mario', 'design work', 230);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);


const incOne = new Invoice('mario', 'work on the mario website', 400);
const incTwo = new Invoice('orio', 'work on the orio website', 500);

//console.log(incOne, incTwo);
//let invoices: string[] = []; allowes only string values in the array
let invoices: Invoice[] = []; //allows only Invoice elements
//invoices.push('not,allowed');  is not possible
//invoices.push({name: 'fhean'}); is not possible
invoices.push(incOne);
invoices.push(incTwo);

/*
//can be done
incOne.client = 'rek';
incTwo.amount = 7898;

//incTwo.amount = '78';  cannot change type of element
*/
/*
invoices.forEach(inv => {
    //inv.client = 'omething else'; only read cannot change value because of readonly
    //console.log(inv.client, inv.details, inv.amount, inv.format());  inv.details cannot be accesed because its private 
    console.log(inv.client, inv.amount, inv.format());
});
//console.log(invoices);
*/

//const form = document.querySelector('form')!;  htmlformelement because form is html tag
const form = document.querySelector('.new-item-form') as HTMLFormElement; 
//typecasting is done by declaring as htmlformelement before it was just element because of class name 
//console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if( type.value === 'invoice' ){
        doc = new Invoice( toform.value, details.value, amount.valueAsNumber );
    }else {
        doc = new Payment( toform.value, details.value, amount.valueAsNumber );
    }
    console.log(doc);
   /* console.log(
        type.value, 
        toform.value,
        details.value,
        amount.valueAsNumber  //to make number look blue else it will be a string
    );
    */
})