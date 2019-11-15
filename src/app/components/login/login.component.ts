import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  LoginForm: FormGroup;

  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit() {
    this.user.email = "";
    this.user.password= ""; 
    this.LoginForm = new FormGroup({
      'email': new FormControl(this.user.email, [Validators.required]),
      'password': new FormControl(this.user.password, [Validators.required])
    });
  }

  get email() { return this.LoginForm.get('email'); }
  get password() { return this.LoginForm.get('password'); }

  login(){
    
    let user = new User();
    user.email = this.email.value;
    user.password = this.password.value;

    this.loginService.login(user)
      .subscribe(response =>{
        if (localStorage.getItem('token')) {
          let redirect = this.loginService.redirectUrl ? this.router.parseUrl(this.loginService.redirectUrl) : "/list"
        
        this.router.navigateByUrl(redirect);
        }
      });

   
  }

}
