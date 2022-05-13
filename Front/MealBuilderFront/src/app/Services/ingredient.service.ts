import { Subject } from "rxjs";
import { Ingredient } from "../ingredient/ingredient-model";


export class IngredientService {

    _ingredientsChanged = new Subject<Ingredient[]>();

    _startedEditing = new Subject<number>();


    private _ingredients: Ingredient[] = [
        new Ingredient(0,'Tomato', 'vegetable', 'https://dictionary.cambridge.org/fr/images/thumb/tomato_noun_001_17860.jpg?version=5.0.239',1),
        new Ingredient(1,'Banana', 'fruit', 'https://dictionary.cambridge.org/fr/images/thumb/banana_noun_001_01109.jpg?version=5.0.239',1),
        new Ingredient(2,'Apple', 'fruit', 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg',1),
        new Ingredient(3,'leek', 'vegetable', 'https://cdn.hinative.com/attached_images/151992/122051aa844a729ac8b666cebc6c9b6adbb84af2/large.jpg?1502548178',1)
    ];

    public getIngredients() {
        return this._ingredients.slice();
    }

    public getIngredientByIndex(index: number) {
        return this._ingredients[index];
    }

    public addIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this._ingredientsChanged.next(this._ingredients.slice());
        console.log(this._ingredients.slice());
    }

    public updateIngredient(index: number, newIngredient: Ingredient) {
        this._ingredients[index] = newIngredient;
        this._ingredientsChanged.next(this._ingredients.slice());
    }

    public deleteIngredient(index: number) {
        this._ingredients.splice(index,1);
        this._ingredientsChanged.next(this._ingredients.slice());
    }
}