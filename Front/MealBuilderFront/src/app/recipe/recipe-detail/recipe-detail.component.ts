import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  _recipe : Recipe = new Recipe('','','',[]);
  id: number = 0;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this._recipe = this.recipeService.getRecipeByIndex(this.id);
      }
    )
  }

  EditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
