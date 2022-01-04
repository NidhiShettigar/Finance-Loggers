import { HasFormatter } from "../interfaces/HasFormatter";
export class Invoice implements HasFormatter{ 
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {  //after adding implements we must have format() in string form
        return `${this.client} owes Rs${this.amount} for ${this.details}`;
    }
}
