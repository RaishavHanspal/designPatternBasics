import { Cow, Dog, Lion } from "./factory";

export type TAnimalType = "domestic" | "wild";

/** abstract factory is adding another level of abstraction on a factory design pattern */
export class WildAnimals {
    public static getAnimal(animal: string) {
        switch (animal) {
            case "Lion": return new Lion();
        }
    }
}


/** abstract factory is adding another level of abstraction on a factory design pattern */
export class DomesticAnimals {
    public static getAnimal(animal: string) {
        switch (animal) {
            case "Dog": return new Dog();
            case "Cow": return new Cow();
        }
    }
}

export class DistinctAnimalCreator {
    public static createAnimal(animal: string, type: TAnimalType) {
        switch(type){
            case "domestic": return DomesticAnimals.getAnimal(animal);
            case "wild": return WildAnimals.getAnimal(animal);
        }
    }
}