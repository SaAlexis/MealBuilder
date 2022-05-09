import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() _recipe : Recipe = new Recipe('','','',[]);

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
