import { Ingredient } from "../ingredient/ingredient-model";


export class Recipe {
    public _name : string;
    public _note : string;
    public _imagePath : string;
    public _ingredients: Ingredient[];

    constructor(name: string, note: string, imagePath: string, ingredients: Ingredient[])
    {
        this._name = name;
        this._note = note;
        this._imagePath = imagePath;
        this._ingredients = ingredients;
    }
}