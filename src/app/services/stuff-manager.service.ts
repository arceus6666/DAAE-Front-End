import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StuffManagerService {

  constructor() { }

  /**
   * Save an item in local storage.
   * @param key key for the item.
   * @param item item to store.
   */
  public storeItem(key: string, item: string): void {
    // console.log('saving: ' + item + ', as: ' + key)
    localStorage.setItem(key, item);
  }

  /**
   * Recover an item from local storage.
   * @param key key of the item.
   */
  public getItem(key: string): string {
    return localStorage.getItem(key);
  }

  /**
   * Delete an item from local storage.
   * @param key key of the item.
   */
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
