import { ClassA } from "../../common/classes/ClassA";
import { ClassB } from "../../common/classes/ClassB";
import { IInterface } from "../../common/interfaces/Interface";

export class Creater {
    static create(type: string): IInterface {
        let reference: IInterface
        if (type === "A") {
            reference = new ClassA();
        }
        else if (type === "B") {
            reference = new ClassB();
        }
        else {
            reference = new ClassA(type);
        }
        return reference;
    }
}