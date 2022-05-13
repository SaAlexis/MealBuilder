import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientDetailComponent } from './ingredient/ingredient-detail/ingredient-detail.component';
import { IngredientEditComponent } from './ingredient/ingredient-edit/ingredient-edit.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'ingredients', component: IngredientComponent,
    children : [
      { path: ':id', component: IngredientDetailComponent },
      { path: ':id/edit', component: IngredientEditComponent },
    ]
  },
  { path: 'recipes', component: RecipeComponent, 
    children : [
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  { path: 'newRecipe', component: RecipeEditComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
