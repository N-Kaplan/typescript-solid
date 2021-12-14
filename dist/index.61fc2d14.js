var Engine1 = function() {
    function Engine() {
        this._status = false;
    }
    Object.defineProperty(Engine.prototype, "status", {
        get: function() {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnEngineOn = function() {
        this._status = true;
    };
    Engine.prototype.turnEngineOff = function() {
        this._status = false;
    };
    return Engine;
}();
var MusicPlayer1 = function() {
    function MusicPlayer() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    Object.defineProperty(MusicPlayer.prototype, "musicLevel", {
        get: function() {
            return this._musicLevel;
        },
        set: function(value) {
            this._musicLevel = value;
            this._oldMusicLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    MusicPlayer.prototype.turnMusicOn = function() {
        this._musicLevel = this._oldMusicLevel;
    };
    MusicPlayer.prototype.turnMusicOff = function() {
        this._musicLevel = 0;
    };
    return MusicPlayer;
}();
var Car1 = function() {
    function Car(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._miles = 0;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    Object.defineProperty(Car.prototype, "fuel", {
        get: function() {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "miles", {
        get: function() {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    Car.prototype.addFuel = function(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    //added engineStatus as an external parameter (comes from the engine class)
    Car.prototype.drive = function(engineStatus) {
        if (engineStatus === false || this._fuel <= 0) //what I am doing here is a good principle called "failing early"
        // If you have some conditions you need to check, that will exclude most of the code in your function check that first
        // This prevents your "happy path" of code to be deeply indented.
        return;
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    };
    return Car;
}();
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
//create engine, musicPlayer and car objects
var engine = new Engine1();
var musicPlayer = new MusicPlayer1();
var car = new Car1(100);
//on and off messages:
var onMessage = function(element) {
    return "Turn " + element + " on";
};
var offMessage = function(element) {
    return "Turn " + element + " off";
};
//functionality adjusted to using the 3 classes
musicToggleElement.addEventListener('click', function() {
    if (musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = offMessage('music');
        return;
    }
    musicToggleElement.innerText = onMessage('music');
    musicPlayer.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', function(event) {
    var target = event.target;
    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;
    musicToggleElement.innerText = musicPlayer.musicLevel ? offMessage('music') : onMessage('music');
});
engineToggleElement.addEventListener('click', function() {
    if (engine.status) {
        engine.turnEngineOff();
        engineToggleElement.innerText = onMessage('engine');
        return;
    }
    engineToggleElement.innerText = offMessage('engine');
    engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', function(event) {
    event.preventDefault();
    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.fuel.toString();
});
setInterval(function() {
    car.drive(engine.status);
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = car.miles;
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.fuel.toString();
    if (musicPlayer.musicLevel === 0) audioElement.pause();
    else audioElement.play();
}, 1000);

//# sourceMappingURL=index.61fc2d14.js.map
