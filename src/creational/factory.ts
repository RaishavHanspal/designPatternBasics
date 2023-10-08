/** factory design pattern is adding a level of abstraction in creation of the object, a static instantiator */
export type TAnimal = "Dog" | "Lion" | "Cow" | "Animal" ;
export class Animal {
    protected name: TAnimal = "Animal";
    private carnivore: boolean;
    private herbivore: boolean;
    constructor(eatsAnimals: boolean, eatsPlants: boolean) {
        this.carnivore = eatsAnimals;
        this.herbivore = eatsPlants;
    }

    public onlyEatsAnimals(): boolean {
        return this.carnivore && !this.herbivore;
    }

    public onlyEatsPlants(): boolean {
        return !this.carnivore && this.herbivore;
    }

    public eatsPlantsAndAnimals(): boolean {
        return this.carnivore && this.herbivore;
    }

    public introduce(): string{
        return `I'm a ${this.name}`;
    }
}

export class Lion extends Animal {
    protected name: TAnimal = "Lion";
}
export class Cow extends Animal {
    protected name: TAnimal = "Cow";
}
export class Dog extends Animal {
    protected name: TAnimal = "Dog";
}


export class AnimalCreator {
    public static createAnimal(animal: TAnimal) {
        switch (animal) {
            case "Dog": return new Dog(true, true);
            case "Lion": return new Lion(true, false); 
            case "Cow": return new Cow(false, true); 
        }
    }
}
