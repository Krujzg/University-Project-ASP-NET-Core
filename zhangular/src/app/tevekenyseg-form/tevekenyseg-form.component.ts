import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Signalr} from '../signalr';
import {Tevekenyseg} from "../tevekenyseg";

@Component({
  selector: 'app-tevekenyseg-form',
  templateUrl: './tevekenyseg-form.component.html',
  styleUrls: ['./tevekenyseg-form.component.css']
})
export class TevekenysegFormComponent implements OnInit {
  private router: Router;
  private http: HttpClient;
  private token: string;
  public Tevekenysegek: Array<Tevekenyseg>;
  private sr: Signalr;
  constructor(router: Router, http: HttpClient) {
    this.router = router;
    this.http = http;
    this.token = sessionStorage.getItem('token');
    console.log(this.token);
    if (this.token == null || this.token.toString().length < 3) {
      this.router.navigate(['login']);
    } else {

      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token
      };

      this.http.get<Tevekenyseg[]>('https://localhost:44385/api/tevekenyseg', {headers}).subscribe(response => {
        this.Tevekenysegek = response;
        console.log(this.Tevekenysegek);
      }, error => {
        if (error.status.toString() === '401') {
          this.router.navigate(['login']);
        }
      });

      this.sr = new Signalr('https://localhost:44385/tevekenysegHub');
      this.sr.register('Tevekenyseg', t => {
        this.Tevekenysegek.push(t);
        return true;
      });

      this.sr.start();
    }


  }

  ngOnInit() {

  }

}
