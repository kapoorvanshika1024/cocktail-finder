// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Add RouterModule to use router-outlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cocktail Finder'; // Title of your app
}
