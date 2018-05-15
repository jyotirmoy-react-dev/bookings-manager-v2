import { Component, OnInit } from '@angular/core';
import { HomepageserviceService } from '../homepageservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  buttonText = 'Login';
  constructor(private snackBar: MatSnackBar,private homeService: HomepageserviceService, private router: Router) { }

  ngOnInit() {
    this.setupForm();
  }
  setupForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('',{
        validators: Validators.required
      }),
      password: new FormControl('',{
        validators: Validators.required
      })
    });
  }
  userLogin({valid,value}) {
    
    if (valid) {
      this.homeService.showHideLoader(true);
      const send_data = {
        "email": value.email,
        "password": value.password
      };
      this.buttonText = 'Checking....';
      this.homeService.setUserLogin(send_data).subscribe(res => {
        const token = res.id;
        sessionStorage.clear();
        sessionStorage.setItem('token', token);
        this.homeService.setToken(token);
        this.homeService.showHideLoader(false);
        this.homeService.setUserLogFlag(true);
        this.router.navigate(['home']);
      },
    ({error})=>{
      this.snackBar.open(error.error.message, '', {
        duration: 2000,
      });
      this.buttonText = 'Login';
      this.homeService.showHideLoader(false);
    });
    }
  }
}
