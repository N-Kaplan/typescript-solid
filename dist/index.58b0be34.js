//instructions:
//add a new animal (requires change in the zoo class)
//Create a makeSound function in each Animal class, making the original switch redundant
//classes (todo: create 1 animal class from which these extend?
var Dog1 = function() {
    function Dog() {
        this._type = 'dog';
        this._sound = 'woof';
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.makeSound = function() {
        return this._sound;
    };
    return Dog;
}();
var Cat1 = function() {
    function Cat() {
        this._type = 'cat';
        this._sound = 'meow';
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.makeSound = function() {
        return this._sound;
    };
    return Cat;
}();
var Parrot1 = function() {
    function Parrot() {
        this._type = 'parrot';
        this._sound = 'I am a pirate';
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.makeSound = function() {
        return this._sound;
    };
    return Parrot;
}();
var Tiger1 = function() {
    function Tiger() {
        this._type = 'tiger';
        this._sound = 'roar';
    }
    Object.defineProperty(Tiger.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tiger.prototype, "type", {
        get: function() {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Tiger.prototype.makeSound = function() {
        return this._sound;
    };
    return Tiger;
}();
var Zoo1 = function() {
    function Zoo() {
        this._animals = new Array();
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
    Zoo.prototype.addAnimal = function(animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function() {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}();
var zoo = new Zoo1;
zoo.addAnimal(new Cat1);
zoo.addAnimal(new Dog1);
zoo.addAnimal(new Parrot1);
zoo.addAnimal(new Tiger1);
//todo: look further into type any
zoo.animals.forEach(function(animal) {
    document.querySelector('#target').innerHTML += animal.type + ": " + animal.makeSound() + "<br>";
});

//# sourceMappingURL=index.58b0be34.js.map
