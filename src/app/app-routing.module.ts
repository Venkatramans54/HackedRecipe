import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import { RecipeHomepageComponent } from './recipe-homepage/recipe-homepage.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

const routes: Routes=[
  { path: 'recipeHome', component: RecipeHomepageComponent, pathMatch: 'full' },
  { path: 'recipeItem/:id', component:RecipeItemComponent },
  { path: '', redirectTo:'/recipeHome', pathMatch: 'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
