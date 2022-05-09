import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Recipe } from '../../recipe-model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() _recipe: Recipe = new Recipe('','','',[]);


  constructor(private recipeService: RecipeService) {
  
  }

  ngOnInit(): void {
  }


  onSelected() {
    this.recipeService._recipeSelected.emit(this._recipe)
  }

}
