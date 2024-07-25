import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-team',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent {
    loginData = {
        email: '',
        password: ''
    };
    private apiUrl = 'https://jeff-leekickboks.nl/backend/login.php';

    constructor(private http: HttpClient, private router: Router) {}
    
    onSubmit() {
        this.http.post(`${this.apiUrl}` , this.loginData)
          .subscribe(response => {
            if (response) {
              this.router.navigate(['/instellingen']);
            } else {
              alert('Login failed');
            }
          });
      }

    
}