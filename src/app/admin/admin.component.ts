import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

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
 

    constructor(
      private crudService: CrudService,
      private router: Router,
    ) {}
    
   async onSubmit() {
     this.crudService.login(this.loginData.email, this.loginData.password)
        .subscribe(response => {
          console.log('response',response);
          if (response.access_token) {
            localStorage.setItem('jwt', response.access_token);
            this.router.navigate(['/instellingen']);
          } else {
            alert('Login failed');
          }
        });
    }

    
}