import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter';

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

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string, string, number]; //tuple implemented
    values = [toform.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if( type.value === 'invoice' ){
        //doc = new Invoice( toform.value, details.value, amount.valueAsNumber );
        doc = new Invoice(...values);  //... = spread operator.
    }else {
        //doc = new Payment( toform.value, details.value, amount.valueAsNumber );
        doc = new Payment(...values);
    }
  
    list.render(doc, type.value, 'end');
    /*
    console.log(doc);
    console.log(
        type.value, 
        toform.value,
        details.value,
        amount.valueAsNumber  //to make number look blue else it will be a string
    );
    */
});

//generics
const addUID = <T extends object>(obj: T) => {      // object can be replaced bt {name: string}  
/*const addUID = (obj: object) => {    
= normally we write this line but for generic we have 
<anyletter>(obj: anyletter) included */
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'reena', age:'27'});  //allowed for {name: string}
//let docOne = addUID({ age:'27'}); not allowed for {name: string}
//let docOne = addUID({name: 78, age:'27'}); not allowed for {name: string}
/*let docTwo = addUID('hello');  allowed when only type T is specified. 
gives error if extends object is written with type T*/
//console.log(docOne);
console.log(docOne.age); // only possible because of <T> else gives error

/*
// genericd with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<string> = {   // declared string so data is string
    uid: 34,
    resourceName: 'jeetu',
    data: 'heyy'
}

const docFour: Resource<string[]> = {   // declared string array so data is array of string
    uid: 84,
    resourceName: 'neetu',
    data: ['heyy','hello']
}

const docFive: Resource<object> = {   // declared object so data is in object 
    uid: 74,
    resourceName: 'meetu',
    data: {greet: 'heyy'}
}

console.log(docThree, docFour, docFive);

//Enums
enum ResourceType { BOOK, AUTHOR, FILEM, DIRECTOR}

interface Resource<T> {
    uid: number;
    resourcetype: ResourceType;
    data: T;
}

const docSix: Resource<object> = {   // declared object so data is in object 
    uid: 74,
    resourcetype: ResourceType.AUTHOR,
    data: {title: 'Author Name'}
}

const docSeven: Resource<object> = {   // declared object so data is in object 
    uid: 74,
    resourcetype: ResourceType.BOOK,
    data: {name: 'Book Name'}
}

console.log(docSix, docSeven);
*/
//tuples

let arr = ['tyu', 78, true];
arr[0] = false;
arr[1] = 'hrru';
arr = [789, false, 'tghb'];

let tup: [string, number, boolean] = ['henu', 34, true];
tup[0] = 'jeenu';
//tup[0] = 45; is not possible
tup[1] = 46;

let student: [string, number];
student = ['heena', 56];
//student = [23, 'rtyu']; is not possible

