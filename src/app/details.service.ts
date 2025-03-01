import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getAllDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getDetailById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createRecord(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  updateRecord(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  deleteRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  patchRecord(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/${id}`, data);
  }
}
