import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private _recipeService: RecipeService, private _router: Router) { }
  recipeItem: any

  ngOnInit(): void {
    this.recipeItem=this._recipeService.selectedRecipe
    console.log(this._recipeService.selectedRecipe)
  }


}
