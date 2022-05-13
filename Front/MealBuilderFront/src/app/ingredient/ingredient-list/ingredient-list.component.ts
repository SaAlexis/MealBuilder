import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IngredientService } from 'src/app/Services/ingredient.service';
import { Ingredient } from '../ingredient-model';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit, OnDestroy {

  _ingredients!: Ingredient[];

  private _subIngredientChanged!: Subscription;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this._ingredients = this.ingredientService.getIngredients();

    this._subIngredientChanged = this.ingredientService._ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this._ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(): void {
    this._subIngredientChanged.unsubscribe();
  }

  onRecipeAdded(recipe : Ingredient) {
    this._ingredients.push(recipe);
  }

  EditItem(id: number)
  {
    this.ingredientService._startedEditing.next(id);
  }

}
