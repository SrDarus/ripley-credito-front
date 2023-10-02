import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { ConsultaCreditoRequest } from '../models/request/consulta-credito-request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient ) { }

  consultarCredito(request: ConsultaCreditoRequest):Observable<any> {

    let url = `${environment.urlBase}transaction/consultaCredito`
    return this.http.post(url, request)
  }
}
