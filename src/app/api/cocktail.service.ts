import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // Method to search cocktails
  searchCocktail(query: string): Observable<any> {
    const url = `${this.baseUrl}/search.php?s=${query}`;
    return this.http.get<any>(url);
  }
}
