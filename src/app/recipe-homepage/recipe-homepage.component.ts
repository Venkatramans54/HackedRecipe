import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-homepage',
  templateUrl: './recipe-homepage.component.html',
  styleUrls: ['./recipe-homepage.component.css']
})
export class RecipeHomepageComponent implements OnInit {

  
  recipeList: any
  filterData=""
  data:any
  tempList=[]
  completeList=[]
  home=true

  constructor(private _recipeService: RecipeService, private _router: Router) { }

  ngOnInit(): void {
    this.home=true
    this._recipeService.fetchRecipe()
      .subscribe((res)=>{
        this.recipeList=res
        console.log(this.recipeList)
      })
  }

  filterRecipe(){
    if(this.filterData===''){
      this.ngOnInit()
    }
    else{
      let filteredData=this.recipeList.filter(recipe=>{
        return recipe.name.includes(this.filterData)
      })
      this.recipeList=filteredData
    }
  }

  viewRecipe(recipe){
    this.home=false
    this._recipeService.selectedRecipe=recipe
    this._router.navigate(['/recipeItem', recipe.id])
  }
  back(){
    this.home=true
    this._router.navigate([''])
    this.ngOnInit()
  }

}
