import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IngredientService } from 'src/app/Services/ingredient.service';
import { Ingredient } from '../ingredient-model';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.scss']
})
export class IngredientDetailComponent implements OnInit {

  _ingredient : Ingredient = new Ingredient(0,'','','',1);
  id: number = 0;

  constructor(private ingredientService: IngredientService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this._ingredient = this.ingredientService.getIngredientByIndex(this.id);
      }
    )
  }

  EditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
