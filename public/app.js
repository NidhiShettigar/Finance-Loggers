import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
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
const form = document.querySelector('.new-item-form');
//typecasting is done by declaring as htmlformelement before it was just element because of class name 
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber);
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
const addUID = (obj) => {
    /*const addUID = (obj: object) => {
    = normally we write this line but for generic we have
    <anyletter>(obj: anyletter) included */
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'reena', age: '27' }); //allowed for {name: string}
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
*/
//Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILEM"] = 2] = "FILEM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const docSix = {
    uid: 74,
    resourcetype: ResourceType.AUTHOR,
    data: { title: 'Author Name' }
};
const docSeven = {
    uid: 74,
    resourcetype: ResourceType.BOOK,
    data: { name: 'Book Name' }
};
console.log(docSix, docSeven);
