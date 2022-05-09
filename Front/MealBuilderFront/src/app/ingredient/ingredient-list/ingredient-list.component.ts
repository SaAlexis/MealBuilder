import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient-model';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  _ingredients: Ingredient[] = [
    new Ingredient('Tomato', 'vegetable', 'https://dictionary.cambridge.org/fr/images/thumb/tomato_noun_001_17860.jpg?version=5.0.239'),
    new Ingredient('Banana', 'fruit', 'https://dictionary.cambridge.org/fr/images/thumb/banana_noun_001_01109.jpg?version=5.0.239'),
    new Ingredient('Apple', 'fruit', 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg'),
    new Ingredient('leek', 'vegetable', 'https://cdn.hinative.com/attached_images/151992/122051aa844a729ac8b666cebc6c9b6adbb84af2/large.jpg?1502548178')
  ];

  constructor() 
  {

  }

  ngOnInit(): void 
  {

  }

}
