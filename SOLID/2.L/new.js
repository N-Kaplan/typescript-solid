//instruction: refactor the Discount class in 3 different classes with the same interface "VariableDiscount" & "FixedDiscount" & "NoDiscount"
var VariableDiscount = /** @class */ (function () {
    function VariableDiscount(type, value) {
        //is this equivalent to a constant?
        this._type = 'variable';
        this._value = 0;
        this._type = type;
        this._value = value;
        if (this._type != 'none' && value <= 0) {
            throw new Error('You cannot create a ' + this._type + ' discount with a negative value');
        }
    }
    return VariableDiscount;
}());
