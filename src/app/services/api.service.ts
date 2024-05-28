import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  getData(endpoint: string): Observable<any> {
    return this.http.get<Contact[]>(`${this.apiUrl}/${endpoint}`);
  }

  postData(endpoint: string, data: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiUrl}/${endpoint}`, data);
  }

  putData(endpoint: string, data: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${endpoint}`, data);
  }

  deleteData(endpoint: string): Observable<any> {
    return this.http.delete<void>(`${this.apiUrl}/${endpoint}`);
  }
}
