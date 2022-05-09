import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MealBuilderFront';
  loaderFeature = 'ingredient';

  onNavigate(feature: string) {
    this.loaderFeature = feature;
  }
}
