import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { farmacovigilancia } from '../interfaces/farmacovigilancia.interface';


@Injectable({
  providedIn: 'root'
})
export class farmacovigilanciaService {
  // Options
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  // registrar farmacovigilancia
  registerfarmacovigilancia(user: farmacovigilancia): Observable<farmacovigilancia>{
    return this.http.post<farmacovigilancia>(`${environment.baseUrlAPI}/register`, user, this.httpOptions);
  }

  getfarmacovigilancia(){
    return this.http.get<farmacovigilancia[]>(environment.baseUrlAPI + '/farmacovigilancia/all');
  }

  deletefarmacovigilancia(editfarmacovigilancia: farmacovigilancia) {
    return this.http.post(environment.baseUrlAPI + '/farmacovigilancia/edit' ,editfarmacovigilancia);
  }
}
