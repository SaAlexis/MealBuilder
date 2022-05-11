import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../Services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
