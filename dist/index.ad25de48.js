var Oven1 = function() {
    function Oven() {
    }
    Object.defineProperty(Oven.prototype, "isOn", {
        get: function() {
            return this._isOn;
        },
        enumerable: false,
        configurable: true
    });
    Oven.prototype.turnOn = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Oven.prototype.turnOff = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    Oven.prototype.cook = function(item) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        } else {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    return Oven;
}();
var Stove1 = function() {
    function Stove() {
    }
    Object.defineProperty(Stove.prototype, "isOn", {
        get: function() {
            return this._isOn;
        },
        enumerable: false,
        configurable: true
    });
    Stove.prototype.turnOn = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Stove.prototype.turnOff = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    Stove.prototype.cook = function(item) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now making " + item + " !</p>";
            }, 2000);
            console.log("Now making " + item + "!");
        } else {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    return Stove;
}();
var Restaurant1 = function() {
    function Restaurant(name, appliance) {
        this._name = name;
        this._appliance = appliance;
    }
    Restaurant.prototype.Cook = function(item) {
        this._appliance.turnOn();
        this._appliance.cook(item);
        this._appliance.turnOff();
    };
    return Restaurant;
}();
var bakery = new Restaurant1("Bakery", new Oven1);
bakery.Cook("cookies");
var creperie = new Restaurant1("Creperie", new Stove1());
creperie.Cook("crepes"); //Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
 /*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */ 

//# sourceMappingURL=index.ad25de48.js.map
