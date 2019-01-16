import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  private backend_url: string

  constructor(private _http: HttpClient) {
    // change this to http://skynet.lp.upb.edu:7890 when on build
    this.backend_url = 'http://localhost:7890'
  }

  public getGlobal<Object>(
    urlMethod: string[],
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<Object> {
    let url = '';

    for (let m in urlMethod) {
      url += '/' + urlMethod[m];
    }

    return this._http.get<Object>(this.backend_url + url, {
      headers: headers,
      params: params
    });
  }

  public postGlobal<Object>(
    urlMethod: string[],
    object: any,
    token?: string
  ) {
    let url = '';
    let hs = new HttpHeaders();
    let valor = JSON.stringify(object);

    hs.set('Content-Type', 'application/json');
    if (token) hs.set('Authorization', token);

    for (let m in urlMethod) {
      url += '/' + urlMethod[m];
    }

    return this._http.post<Object>(this.backend_url + url, valor, {
      headers: hs
    });
  }

  public deleteGlobal<Object>(
    urlMethod: string[],
    code: string,
    token?: string
  ) {
    let url = '';
    let hs = new HttpHeaders();

    hs.set('Content-Type', 'application/json');
    if (token) hs.set('Authorization', token);

    for (let m in urlMethod) {
      url += '/' + urlMethod[m];
    }

    return this._http.delete<Object>(this.backend_url + url + code, {
      headers: hs
    });
  }

  public putGlobal<Object>(
    urlMethod: string[],
    object: any,
    token?: string
  ) {
    let url = '';
    let hs = new HttpHeaders();
    let valor = JSON.stringify(object);

    hs.set('Content-Type', 'application/json');
    if (token) hs.set('Authorization', token);

    for (let m in urlMethod) {
      url += '/' + urlMethod[m];
    }

    return this._http.put<Object>(this.backend_url + url, valor, {
      headers: hs
    });
  }

  public postRegistry<Object>(user: string, message: string) {
    let valor = JSON.stringify({ user: user, message: message })
    return this._http.post<Object>(
      this.backend_url + '/regs/register',
      valor,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }
}
