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
    constructor(){
        super(true, false);
        this.name = "Lion";
    }
}
export class Cow extends Animal {
    constructor(){
        super(false, true);
        this.name = "Cow";
    }
}
export class Dog extends Animal {
    constructor(){
        super(true, true);
        this.name = "Dog";
    }
}


export class AnimalCreator {
    public static createAnimal(animal: TAnimal) {
        switch (animal) {
            case "Dog": return new Dog();
            case "Lion": return new Lion(); 
            case "Cow": return new Cow(); 
        }
    }
}
