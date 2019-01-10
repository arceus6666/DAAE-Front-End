import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StuffManagerService {

  constructor(private http: HttpClient) { }

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

  public upload(files: Set<File>): { [key: string]: Observable<number> } {
    const status = {};
    console.log(files)
    files.forEach(file => {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const req = new HttpRequest('POST', 'http://localhost:7890/upload', formData, {
        reportProgress: true
      });
      const progress = new Subject<number>();
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          const percentDone = Math.round(100 * event.loaded / event.total);
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          progress.complete();
        }
      });
      status[file.name] = {
        progress: progress.asObservable()
      };
    });
    return status;
  }
}
