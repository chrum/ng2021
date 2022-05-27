import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {CustomerService} from "./customer.service";

@Injectable({
  providedIn: 'root'
})
export class ShopGuardGuard implements CanActivate {
  constructor(
    private _customerService: CustomerService,
    private _router: Router
    ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this._customerService.isOfAge) {
      return this._router.parseUrl('/age-verification');
    }

    return true;
  }

}
