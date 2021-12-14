//instruction: refactor the Discount class in 3 different classes with the same interface "VariableDiscount" & "FixedDiscount" & "NoDiscount"

//This is called a Union, the discountType can only contain the following 2 values:
type discountType = "variable" | "fixed" | "none";

class VariableDiscount {
    //is this equivalent to a constant?
    private readonly _type: discountType = 'variable';
    private readonly _value: number = 0;

    constructor(type: discountType, value: number) {
        this._type = type;
        this._value = value;

        if (this._type != 'none' && value <= 0) {
            throw new Error('You cannot create a ' + this._type + ' discount with a negative value');
        }
    }
}