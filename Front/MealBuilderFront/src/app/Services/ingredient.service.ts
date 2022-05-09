import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../ingredient/ingredient-model";


export class IngredientService {


    _ingredientSelected = new EventEmitter<Ingredient>();

    _ingredientChanged = new EventEmitter<Ingredient[]>();


    private _ingredients: Ingredient[] = [
        new Ingredient('Tomato', 'vegetable', 'https://dictionary.cambridge.org/fr/images/thumb/tomato_noun_001_17860.jpg?version=5.0.239'),
        new Ingredient('Banana', 'fruit', 'https://dictionary.cambridge.org/fr/images/thumb/banana_noun_001_01109.jpg?version=5.0.239'),
        new Ingredient('Apple', 'fruit', 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg'),
        new Ingredient('leek', 'vegetable', 'https://cdn.hinative.com/attached_images/151992/122051aa844a729ac8b666cebc6c9b6adbb84af2/large.jpg?1502548178')
    ];

    public getIngredients() {
        return this._ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this._ingredientChanged.emit(this._ingredients.slice());
    }
}