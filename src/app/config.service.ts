import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './customer';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

// newCustomer = {"name":"shree","level":"Fund","country":"Newzealand",
//                 "ctrlPoint":"CPMAUST","setNumber":"45","contact":"9999999999","deleteFlag":true};

getAllCustomersURL = 'http://localhost:8080/getCustomer';
  getAllCustomers() {
    return this.http.get(`${this.getAllCustomersURL}`);
  }

searchURL = 'http://localhost:8080/searchCustomer';
searchCustomer(name: string){
  return this.http.get(`${this.searchURL}/`+name);
}

registerURL = 'http://localhost:8080/registerCustomer';
registerCustomer(newCustomer: Customer){
  return this.http.post(`${this.registerURL}`,newCustomer,httpOptions);
}

updateURL = 'http://localhost:8080/updateCustomer';
updateCustomer(newCustomer: Customer){
  return this.http.post(`${this.updateURL}`,newCustomer,httpOptions);
}
}


