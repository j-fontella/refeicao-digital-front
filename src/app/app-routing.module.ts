import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnComponent} from "./views/login/on/on.component";

const routes: Routes = [
  {
    path : 'on',
    component : OnComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
