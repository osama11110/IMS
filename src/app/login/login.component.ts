import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from '../session-storage.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // userName: string = '';
  // userPassword: string = '';

  // constructor(private authService: AuthService, private router: Router) { }

  // ngOnInit() {  }

  // verifyUser() {
  //   if(this.userName === 'slosh' && this.userPassword === 'slosh') {
  //     this.authService.setLogin(true);
    
  //     this.router.navigateByUrl('/adminlayout/dashboard');
  //   }
  //   else if(this.userName === 'sl' && this.userPassword === 'sl') {
  //     this.authService.setLogin(true);
    
  //     this.router.navigateByUrl('/customerlayout/customer-dashboard');
  //   } 
  //   else if(this.userName === 'slo' && this.userPassword === 'slo') {
  //     this.authService.setLogin(true);
    
  //     this.router.navigateByUrl('/sellerlayout/seller-dashboard');
  //   } 
  //   else {
  //     swal.fire({title: 'Error!',
  //     text: 'Invalid Username or Password',
  //     icon: 'error',
  //     confirmButtonText: 'ok'});
  //     this.authService.setLogin(false);
  //   }
  // }




  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private sessionstorage : SessionStorageService) { 
    this.loginForm = new FormGroup({
      selectedOption: new FormControl('') 
    });
   }
   
  ngOnInit() {  }
  selectedOption: string;
  verifyUser()
  {


      console.log(this.selectedOption);
    
      console.log(this.selectedOption);
      if (this.selectedOption === '3') {
     // Send login request to the Node.js API
     this.http.post('http://localhost:3000/auth-customer', { customeremail: this.email, customerpassword: this.password })
     .subscribe(response => {
        let value = response[0].CUSTOMER_ID
       // Handle the API response, such as storing the JWT token and redirecting the user
       console.log(value);
       this.sessionstorage.setValue('customerId', value );

    if(response) {
     
      this.authService.setLogin(true);
    
      this.router.navigateByUrl('/customerlayout/customer-dashboard');
    }
    
     else {
      swal.fire({title: 'Error!',
      text: 'Invalid email or Password',
      icon: 'error',
      confirmButtonText: 'ok'});
      this.authService.setLogin(false);
    }
  });
} 
if (this.selectedOption === '2') {
  // Send login request to the Node.js API
  this.http.post('http://localhost:3000/search-seller', { selleremail: this.email, sellerpassword: this.password })
  .subscribe(response => {
    let value = response[0].SELLER_ID;
    // Handle the API response, such as storing the JWT token and redirecting the user
    console.log(value);
    this.sessionstorage.setValue('sellerId', value)

  
 if(response) {
   value = this.sessionstorage.getValue('sellerid')
   console.log(value)
   this.authService.setLogin(true);
 
   this.router.navigateByUrl('/sellerlayout/seller-dashboard');
 }
 
  else {
   swal.fire({title: 'Error!',
   text: 'Invalid email or Password',
   icon: 'error',
   confirmButtonText: 'ok'});
   this.authService.setLogin(false);
 }
});
} 
  }

}
