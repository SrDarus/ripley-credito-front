import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  formLogin: FormGroup = new FormGroup({})

  constructor(private builder: FormBuilder,
    private _loginService: LoginService,
    private router: Router) {
    this.formInit()
  }

  ngOnInit(): void {
  }

  login() {
    console.log("form", this.formLogin)
    console.log("this.formLogin.controls['user'].value", this.formLogin.controls['user'].value)
    this._loginService.login(this.formLogin.controls['user'].value, this.formLogin.controls['password'].value).subscribe((response:any) => {
      console.log("response", response)
      if (response) {

        alert("OK")
        console.log("response", response)
      }
    })


  }


  formInit() {
    this.formLogin = this.builder.group({
      user: ['',Validators.email],
      password: ['']
    })
  }
}
