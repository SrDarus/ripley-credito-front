import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase: string = 'http://localhost:3001/' 
  
  

  constructor(private http: HttpClient ) { }

  login(user: string, password: string ):Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
                      .set('Accept', '*/*'); 

    let url = `${this.urlBase}login/${user}/${password}`
    return this.http.get(url, {headers})
  }
}
