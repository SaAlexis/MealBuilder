import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipeService } from '../../Services/recipe.service';
import { IngredientService } from 'src/app/Services/ingredient.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  @ViewChild('nameInput') _nameInputRef!: ElementRef;
  @ViewChild('noteInput') _noteInputRef!: ElementRef;

  _id: number = 0;
  _editMode = false;

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this._id = +params['id'];
        this._editMode = params ['id'] != null;
      }
    )
  }

  onAddItem() {
    const recName : string = this._nameInputRef.nativeElement.value;
    const recNote : string = this._nameInputRef.nativeElement.value;
    const newRecipe = new Recipe(this._nameInputRef.nativeElement.value,this._noteInputRef.nativeElement.value,'',this.ingredientService.getIngredients());
    this.recipeService.addRecipe(newRecipe);
  }

}
