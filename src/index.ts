import { DistinctAnimalCreator } from "./creational/abstractFactory";
import { AnimalCreator } from "./creational/factory";

/** example of a factory design pattern */
const factoryIntro: string = AnimalCreator.createAnimal("Lion").introduce();
console.log(factoryIntro);

/** example of abstract factory design pattern */
const abstractFactoryIntro: string = DistinctAnimalCreator.createAnimal("Dog", "domestic").introduce();
console.log(abstractFactoryIntro);

