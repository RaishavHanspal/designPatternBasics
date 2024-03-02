import { IInterface } from "../interfaces/Interface";

export class ClassA implements IInterface {
    public name: string;
    constructor(name?: string) {
        this.name = name || this.constructor.name;
        console.log("You are in %o Instance", this.name);
    }

    /**
     * getName
     */
    public getName(): string {
        return this.name;
    }
}