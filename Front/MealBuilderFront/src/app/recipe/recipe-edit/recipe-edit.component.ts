import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipeService } from '../../Services/recipe.service';
import { IngredientService } from 'src/app/Services/ingredient.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/ingredient/ingredient-model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  _id: number = 0;
  _editMode = false;
  _recipeForm!: FormGroup;
  _ingredients: Ingredient[] = [];
  _ingredient!: Ingredient;
  _ingredientsOfRecipe: Ingredient[] = [];


  public get _controls() {
    return (<FormArray>this._recipeForm.get('ingredients')).controls;
  }

  constructor(private recipeService: RecipeService, private ingredientService: IngredientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._ingredients = this.ingredientService.getIngredients();

    this.route.params.subscribe(
      (params: Params) => {
        this._id = +params['id'];
        this._editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  public initForm() {
    let recipeName = "";
    let recipeImage= "";
    let recipeNote = "";
    let recipeIngredients = new FormArray([]);
    

    if(this._editMode) {
      const recipe = this.recipeService.getRecipeByIndex(this._id);

      recipeName = recipe._name;
      recipeImage = recipe._imagePath;
      recipeNote = recipe._note;
      if (recipe['_ingredients']) {
        for (let ingredient of recipe._ingredients ) {
          console.log(ingredient._id);
          recipeIngredients.push(
            new FormGroup({
              'indexIngredient': new FormControl(ingredient._id, Validators.required),
              'nameIngredient': new FormControl(ingredient._name, Validators.required),
              'amountIngredient': new FormControl(ingredient._amount, Validators.pattern("^[1-9]+[0-9]*$"))
            })
          );
        }
      }
    }

    this._recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImage),
      'note': new FormControl(recipeNote),
      'ingredients': recipeIngredients
    });
  }
  
  onSubmit() {
    for (let item of this._recipeForm.value['ingredients']) {
        let ingredient: Ingredient = this.ingredientService.getIngredientByIndex(item.indexIngredient);
        this._ingredient = new Ingredient(ingredient._id,ingredient._name,ingredient._type,ingredient._imagePath,item.amountIngredient);
        this._ingredientsOfRecipe.push(this._ingredient);
    }    

    const newRecipe = new Recipe(
      this._recipeForm.value['name'],
      this._recipeForm.value['note'],
      this._recipeForm.value['imagePath'],
      this._ingredientsOfRecipe);

    if(this._editMode) {
      this.recipeService.updateRecipe(this._id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }

    this.BackForward();
  }


  AddIngredientIntoRecipe(id: number) {
    this._ingredient = this.ingredientService.getIngredientByIndex(id);
    const recipe = this.recipeService.getRecipeByIndex(this._id);
    
    console.log(id);
    (<FormArray>this._recipeForm.get('ingredients')).push(
      new FormGroup({
        'indexIngredient': new FormControl(id),
        'nameIngredient': new FormControl(this._ingredient._name, Validators.required),
        'amountIngredient': new FormControl(0, Validators.pattern("^[1-9]+[0-9]*$"))
      })
    );
    
  }

  RemoveIngredient(index: number) {
    console.log(index);

    (<FormArray>this._recipeForm.get('ingredients')).removeAt(index);
  }

  BackForward() {
    this.router.navigate(['../'], {relativeTo:this.route})
  }

  DeleteRecipe() {
    this.recipeService.deleteRecipe(this._id);
    this.BackForward();
  }
}
