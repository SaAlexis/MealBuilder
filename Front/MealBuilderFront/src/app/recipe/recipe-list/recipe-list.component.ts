import { Component, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  _recipes!: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this._recipes = this.recipeService.getRecipes();

    
    this.recipeService._recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this._recipes = recipes;
      }
    )
  }

  onRecipeAdded(recipe : Recipe) {
    this._recipes.push(recipe);
  }
}
