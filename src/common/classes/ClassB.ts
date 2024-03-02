import { IInterface } from "../interfaces/Interface";

export class ClassB implements IInterface {
    constructor() {
        console.log("You are in ClassB Instance");
    }

    public getName(): string {
        return "--ClassB--"
    }

}