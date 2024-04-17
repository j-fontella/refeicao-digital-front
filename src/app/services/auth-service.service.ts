import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate{

  constructor(private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let ust = localStorage.getItem('ust');
    
    if(!ust){
      return false;
    }
    
    let userStatus = JSON.parse(ust);

    if(!userStatus.token){
      alert("Faça o login novamernte")
      this.router.navigate(['on'])
      return false;
    }

    return true;
  }
  

}
