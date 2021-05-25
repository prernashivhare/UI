import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
      const navigationDetails: string[] = ['/create'];
      this.router.navigate(navigationDetails);
    console.log(this.loginForm.value);
  }


  // //loginForm: FormGroup | undefined;
  // email= "";
  // password= "";
  // data="";
  // constructor(private router: Router) { 
  //   //private formBuilder: FormBuilder
  // }

  // ngOnInit(): void {
   
  // }
  
  // onSubmit() {
  //   const navigationDetails: string[] = ['/create'];
  //     this.router.navigate(navigationDetails);
  //     this.data=this.email;
  //     console.log("email"+this.email);
  //     console.log("data"+this.email);
  // }

}
