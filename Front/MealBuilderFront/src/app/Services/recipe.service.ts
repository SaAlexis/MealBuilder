import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../ingredient/ingredient-model";
import { Recipe } from "../recipe/recipe-model";
import { IngredientService } from "./ingredient.service";


@Injectable()
export class RecipeService {


    _recipeSelected = new EventEmitter<Recipe>();

    _recipesChanged = new EventEmitter<Recipe[]>();



    constructor(private ingredientService: IngredientService) {}

    private _recipes: Recipe[] = [
        new Recipe('Recipe 1', 'Blablabla', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*',this.ingredientService.getIngredients()),
        new Recipe('Recipe 2', 'Blablabla', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*',this.ingredientService.getIngredients()),
        new Recipe('Recipe 3', 'Blablabla', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*',this.ingredientService.getIngredients()),
        new Recipe('Recipe 4', 'Blablabla', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=1200:*',this.ingredientService.getIngredients())
      ];


    public getRecipes() {
        return this._recipes.slice();
    }

    public addRecipe(recipe: Recipe) {
        this._recipes.push(recipe);
        this._recipesChanged.emit(this._recipes.slice());
    }
}