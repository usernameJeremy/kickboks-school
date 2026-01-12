import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
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
    selectedFile: File | null = null;

    constructor(
      private crudService: CrudService,
      private router: Router,
      private http: HttpClient
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

    onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0];
    }
  
    // async uploadFile() {
    //   if (!this.selectedFile) return;
  
    //   const formData = new FormData();
    //   formData.append('file', this.selectedFile);

  
    //   this.http.post('http://localhost:3000/users/file', formData, {
    //   responseType: 'json',
    //   params: {
    //     country: 'Netherlands', 
    //     groupString: 'Voorgerechten,Hoofdgerechten,Dranken' 
    //   }
    // }).subscribe({
    //   next: (response) => console.log('Response:', response),
    //   error: (error) => console.error('Error:', error),
    // });
    // }

    
}