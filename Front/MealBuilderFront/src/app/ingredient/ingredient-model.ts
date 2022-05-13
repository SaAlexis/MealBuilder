

export class Ingredient {
    public _id : number;
    public _name : string;
    public _type : string;
    public _imagePath : string;
    public _amount : number;

    constructor(id: number, name: string, type: string, imagePath: string, amount: number)
    {
        this._id = id;
        this._name = name;
        this._type = type;
        this._imagePath = imagePath;
        this._amount = amount;
    }
}