import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe-model';

@Component({
  selector: 'app-recipe-menu',
  templateUrl: './recipe-menu.component.html',
  styleUrls: ['./recipe-menu.component.scss']
})
export class RecipeMenuComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
