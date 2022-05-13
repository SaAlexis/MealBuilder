import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { IngredientItemComponent } from './ingredient/ingredient-list/ingredient-item/ingredient-item.component';
import { IngredientListComponent } from './ingredient/ingredient-list/ingredient-list.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from './Services/recipe.service';
import { IngredientService } from './Services/ingredient.service';
import { IngredientEditComponent } from './ingredient/ingredient-edit/ingredient-edit.component';
import { IngredientDetailComponent } from './ingredient/ingredient-detail/ingredient-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    IngredientItemComponent,
    IngredientListComponent,
    RecipeEditComponent,
    IngredientEditComponent,
    IngredientDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
    IngredientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
