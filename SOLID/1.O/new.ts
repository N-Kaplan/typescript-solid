//instructions:
//add a new animal (requires change in the zoo class)
//Create a makeSound function in each Animal class, making the original switch redundant

//define types:
type Name = string;
type Sound = string;
type Type = string;

//classes (todo: create 1 animal class from which these extend?
class Dog {
    private _name : Name;
    private _type : Type = 'dog';
    private _sound : Sound = 'woof';

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() {
        return this._sound;
    }
}

class Cat {
    private _name: Name;
    private _type : Type = 'cat';
    private _sound : Sound = 'meow';

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() {
        return this._sound;
    }
}

class Parrot {
    private _name: Name;
    private _type : Type = 'parrot';
    private _sound : Sound = 'I am a pirate';

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() {
        return this._sound;
    }
}

class Tiger {
    private _name: Name;
    private _type : Type = 'tiger';
    private _sound : Sound = 'roar';

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() {
        return this._sound;
    }
}

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }

    // public makeSound(animal: object) : string {
    //     switch(animal.type) {
    //         case 'cat':
    //             return 'Miauw';
    //         case 'dog':
    //             return 'Woef';
    //         case 'parrot':
    //             return 'I am a pirate';
    //         default:
    //             throw new Error('Unknown type: '+ animal.type);
    //     }
    // }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Tiger);

//todo: look further into type any
zoo.animals.forEach((animal: any) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});

