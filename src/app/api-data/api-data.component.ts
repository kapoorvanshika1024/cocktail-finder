import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from '../api/cocktail.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule here
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent {
  cocktails: any[] = []; // Store cocktails
  favorites: any[] = []; // Store favorite cocktails
  error: string = ''; // Error message if any
  
  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.getCocktails();
  }

  // Fetch cocktail data from the API via service
  getCocktails() {
    const queries = ['a', 'm', 'd', 'c'];  // List of different search queries
    const allCocktails: any[] = []; // To hold all fetched cocktails

    queries.forEach(query => {
      this.cocktailService.searchCocktail(query).subscribe({
        next: (response) => {
          console.log(`API Response for ${query}:`, response);
          if (response.drinks && response.drinks.length > 0) {
            allCocktails.push(...response.drinks); // Combine the cocktails from each query
          }
        },
        error: (err) => {
          console.error('Error:', err);
          this.error = 'Failed to load cocktail data. Please try again later.';
        }
      });
    });

    // Update the cocktails list with all fetched cocktails
    this.cocktails = allCocktails;
  }

  // Add a cocktail to the favorites list
  addToFavorites(cocktail: any) {
    if (!this.favorites.find(fav => fav.idDrink === cocktail.idDrink)) {
      this.favorites.push(cocktail);
      alert('Cocktail added to favorites!');
    } else {
      alert('This cocktail is already in your favorites!');
    }
  }

  // Check if a cocktail is in the favorites list
  isFavorite(cocktail: any): boolean {
    return this.favorites.some(fav => fav.idDrink === cocktail.idDrink);
  }
}
