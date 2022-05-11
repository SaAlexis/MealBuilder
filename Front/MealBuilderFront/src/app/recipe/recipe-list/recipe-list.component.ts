import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  _recipes!: Recipe[];

  private _subRecipeChanged!: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this._recipes = this.recipeService.getRecipes();

    
    this._subRecipeChanged = this.recipeService._recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this._recipes = recipes;
      }
    )
  }

  ngOnDestroy(): void {
    this._subRecipeChanged.unsubscribe();
  }

  onRecipeAdded(recipe : Recipe) {
    this._recipes.push(recipe);
  }
}
