import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private role: string
  private loged: boolean
  private _id: string
  constructor() {
    this.role = 'normal'
    this.loged = false
  }

  setID(id) {
    this._id = id
  }

  getID() {
    return this._id
  }

  logIn() {
    this.loged = true
  }

  logOut() {
    this.loged = false
  }

  isLoged() {
    return this.loged
  }

  setRole(r) {
    this.role = r
  }

  getRole() {
    return this.role
  }
}
