import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../ingredient-model';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.scss']
})
export class IngredientItemComponent implements OnInit {

  @Input() _ingredient: Ingredient = new Ingredient(0,'','','',1);
  @Input() _index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
