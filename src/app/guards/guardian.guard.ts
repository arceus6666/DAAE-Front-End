import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StuffManagerService } from '../services/stuff-manager.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate, CanActivateChild {

  constructor(
    private _stuffManager: StuffManagerService,
    private _router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._stuffManager.getItem('token')) {
      return true;
    } else {
      this._router.navigate(['forbidden']);
    }
    
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._stuffManager.getItem('token')) {
      return true;
    } else {
      this._router.navigate(['forbidden']);
    }

  }
}
