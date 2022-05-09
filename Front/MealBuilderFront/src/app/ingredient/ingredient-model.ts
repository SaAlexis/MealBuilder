

export class Ingredient {
    public _name : string;
    public _type : string;
    public _imagePath : string;

    constructor(name: string, type: string, imagePath: string)
    {
        this._name = name;
        this._type = type;
        this._imagePath = imagePath;
    }
}