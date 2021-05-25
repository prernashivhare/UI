import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CreateDocumentService {

  constructor(private http: HttpClient) { }

  saveDocumentURL = 'http://localhost:8080/registerCustomer';
  saveDocument(newDocument : Customer){
    return this.http.post(`${this.saveDocumentURL}`,newDocument,httpOptions);
  }
}
