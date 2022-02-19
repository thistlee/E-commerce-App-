import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: boolean = false;
  email: any;
  password: any;
  productList: any;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    if (this.email == "rashmi18@gmail.com" && this.password == "18@20") {
      this.router.navigate(['../products']);
    }
    else {
      alert("please enter valid details")
    }
  }
}
