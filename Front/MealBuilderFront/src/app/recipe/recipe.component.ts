import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-model';
import { RecipeService } from '../Services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {

  _selectedRecipe: Recipe = new Recipe('','','',[]);

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService._recipeSelected.subscribe(
      (recipe: Recipe) => {
        this._selectedRecipe = recipe;
      }
    );
  }


}
