import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeMenuComponent } from './recipe-menu/recipe-menu.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'ingredients', component: IngredientComponent },
  { path: 'recipes', component: RecipeComponent, 
    children : [
      { path: ':id', component: RecipeDetailComponent },
    ]
  },
  { path: 'menus', component: RecipeMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
