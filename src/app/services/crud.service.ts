import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  getToken() {
     return localStorage.getItem('jwt');
  }
  //private apiUrl = 'http://localhost:3000/'; // Backend URL
  private apiUrl = 'http://localhost:3000/auth/login'; 

  constructor(
    private http: HttpClient,
  ) { }
  
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}auth/login`, { email, password }, { headers, withCredentials: true })
      .pipe( 
        catchError(error => {
          console.error('Error:', error);
          return throwError(() => new Error('Something went wrong with login request'));
        })
      );
  }


}
