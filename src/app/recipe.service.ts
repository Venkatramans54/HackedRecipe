import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url="http://starlord.hackerearth.com/recipe"
  selectedRecipe: any

  constructor(private _http: HttpClient) { }

  fetchRecipe(){
    return this._http.get<any>(this.url)
  }
}
