import { Injectable } from '@angular/core';
import { ClientAccountModel } from './models/account.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import {forkJoin} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AccountService {


  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<ClientAccountModel>('/api/bank');
  }

  
  getAcct() {
    return this.http.get('/api/bank/1');
  }

  createAcct(saldo) {
    let body = JSON.stringify(saldo);
    return this.http.post('/api/bank/', body, httpOptions);
  }

  updateAcct(saldo) {
   
    let body = JSON.stringify(saldo  );
    
    return this.http.put('/api/bank', body, httpOptions);
  }
  getAccts() {
    return forkJoin(
      this.http.get('/apibank/1'),
      this.http.get('apibank/2')
    );
  }

}
