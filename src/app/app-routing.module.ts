import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnComponent} from "./views/login/on/on.component";
import {MenuComponent} from "./views/menu/menu.component";

const routes: Routes = [
  {
    path : 'on',
    component : OnComponent
  },
  {
    path : "menu",
    component : MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
