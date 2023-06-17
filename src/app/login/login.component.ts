import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  userPassword: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {  }

  verifyUser() {
    if(this.userName === 'slosh' && this.userPassword === 'slosh') {
      this.authService.setLogin(true);
    
      this.router.navigateByUrl('/adminlayout/dashboard');
    }
    else if(this.userName === 'sl' && this.userPassword === 'sl') {
      this.authService.setLogin(true);
    
      this.router.navigateByUrl('/customerlayout/customer-dashboard');
    } 
    else if(this.userName === 'slo' && this.userPassword === 'slo') {
      this.authService.setLogin(true);
    
      this.router.navigateByUrl('/sellerlayout/seller-dashboard');
    } 
    else {
      swal.fire({title: 'Error!',
      text: 'Invalid Username or Password',
      icon: 'error',
      confirmButtonText: 'ok'});
      this.authService.setLogin(false);
    }
  }

}
