import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { empty, Subscription } from 'rxjs';
import { IngredientService } from 'src/app/Services/ingredient.service';
import { Ingredient } from '../ingredient-model';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.scss']
})
export class IngredientEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') _form!: NgForm;

  _subIngredient!: Subscription;
  _editedItemIndex: number = -1;
  _editedItem!: Ingredient;
  _editMode: boolean = false;


  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this._subIngredient = this.ingredientService._startedEditing.subscribe(
      (index: number) => {
        this._editedItemIndex = index;
        this._editMode = true;
        this._editedItem = this.ingredientService.getIngredientByIndex(index);
        this._form.setValue({
          name: this._editedItem._name,
          type: this._editedItem._type,
          imagePath: this._editedItem._imagePath
        })
      }
    );
  }

  ngOnDestroy(): void {
    this._subIngredient.unsubscribe();
  }


  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.id ,value.name, value.type, value.imagePath,1);
    if (this._editMode) {
      this.ingredientService.updateIngredient(this._editedItemIndex, newIngredient);
    } else {
      this.ingredientService.addIngredient(newIngredient);
    }
    this.ResetForm();

  }

  ResetForm() {
    this._form.reset();
    this._editMode = false;
  }

  DeleteIngredient() {
    this.ingredientService.deleteIngredient(this._editedItemIndex)
    this.ResetForm();
  }
}
