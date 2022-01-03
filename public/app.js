"use strict";
/* Practice
const anchor = document.querySelector('a')!; //can be written without ! - i.e html identifier
console.log(anchor);
//console.log(anchor.href);  does not work without ! in const anchor line
if(anchor){
    console.log(anchor.href);
}*/
//classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes Rs${this.amount} for ${this.details}`;
    }
}
const incOne = new Invoice('mario', 'work on the mario website', 400);
const incTwo = new Invoice('orio', 'work on the orio website', 500);
//console.log(incOne, incTwo);
//let invoices: string[] = []; allowes only string values in the array
let invoices = []; //allows only Invoice elements
//invoices.push('not,allowed');  is not possible
//invoices.push({name: 'fhean'}); is not possible
invoices.push(incOne);
invoices.push(incTwo);
//can be done
incOne.client = 'rek';
incTwo.amount = 7898;
//incTwo.amount = '78';  cannot change type of element
console.log(invoices);
//const form = document.querySelector('form')!;  htmlformelement because form is html tag
const form = document.querySelector('.new-item-form');
//typecasting is done by declaring as htmlformelement before it was just element because of class name 
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber //to make number look blue else it will be a string
    );
});
