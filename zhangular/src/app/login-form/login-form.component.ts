import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginResult} from '../login-result';
import {LoginViewModel} from '../login-view-model';
import {RegisterViewModel} from '../register-view-model';
import {RegisterResult} from '../register-result';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private router: Router;
  private http: HttpClient;
  constructor(router: Router, http: HttpClient) {
    this.router = router;
    this.http = http;
  }

  ngOnInit() {
  }

  login(email: HTMLInputElement, pass: HTMLInputElement) {
    const loginobject = new LoginViewModel();
    loginobject.Username = email.value;
    loginobject.Password = pass.value;
    let result: LoginResult;
    this.http.post<LoginResult>
    ('https://localhost:44385/login', loginobject).subscribe(t => {
      result = t;
      console.log(result.token);
      sessionStorage.setItem('token', result.token);
      sessionStorage.setItem('email', loginobject.Username);
      this.router.navigate(['/tevekenyseg']);
    }, error => {
      window.alert(error);
    });
  }

  register(email: HTMLInputElement, pass: HTMLInputElement) {
    const registerobject = new RegisterViewModel();
    registerobject.Email = email.value;
    registerobject.Password = pass.value;
    let result: RegisterResult;
    this.http.post<RegisterResult>
    ('https://localhost:44385/register', registerobject).subscribe(t => {
      result = t;
      window.alert('OK!');
    }, error => {
      window.alert(error);
    });

  }

}
