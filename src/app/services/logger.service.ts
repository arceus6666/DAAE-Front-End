import { Injectable } from '@angular/core';
import { StuffManagerService } from './stuff-manager.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private _role: string;
  private _logged: boolean;
  private _id: string;
  private _token: string;

  constructor(
    private _stuffManager: StuffManagerService
  ) {
    this._id = null;
    this._role = null;
    this._token = null;
    this._logged = false;
  }

  public logIn(id: string, role: string, tk: string): void {
    this._id = id;
    this._role = role;
    this._token = tk;
    this._logged = true;
  }

  public logOut(): void {
    this._id = null;
    this._role = null;
    this._token = null;
    this._logged = false;

    if (this._stuffManager.getItem('token')) {
      this._stuffManager.removeItem('token');
    }
  }

  public isLoged(): boolean {
    return this._logged;
  }

  public setToken(tk: string): void {
    this._token = tk;
  }

  public getToken(): string {
    return this._token;
  }

  public setID(id: string): void {
    this._id = id;
  }

  public getID(): string {
    return this._id;
  }

  public setRole(r: string): void {
    this._role = r;
  }

  public getRole(): string {
    return this._role;
  }
}
