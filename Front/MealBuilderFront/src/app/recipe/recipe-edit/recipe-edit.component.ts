import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  @ViewChild('nameInput') _nameInputRef!: ElementRef;
  @ViewChild('noteInput') _noteInputRef!: ElementRef;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const recName : string = this._nameInputRef.nativeElement.value;
    const recNote : string = this._nameInputRef.nativeElement.value;
    const newRecipe = new Recipe(this._nameInputRef.nativeElement.value,this._noteInputRef.nativeElement.value,'',[]);
    this.recipeService.addRecipe(newRecipe);
  }

}
