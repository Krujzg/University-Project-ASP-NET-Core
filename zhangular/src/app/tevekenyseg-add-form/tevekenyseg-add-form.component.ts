import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tevekenyseg} from '../tevekenyseg';

@Component({
  selector: 'app-tevekenyseg-add-form',
  templateUrl: './tevekenyseg-add-form.component.html',
  styleUrls: ['./tevekenyseg-add-form.component.css']
})
export class TevekenysegAddFormComponent implements OnInit {
  private  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  create(nev: HTMLInputElement, kategoria: HTMLSelectElement) {
    const newtevekenyseg = new Tevekenyseg();
    newtevekenyseg.nev = nev.value;
    newtevekenyseg.kategoria = kategoria.value;

    const token = sessionStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    };

    this.http.post('https://localhost:44385/api/tevekenyseg', newtevekenyseg, {headers}).subscribe(resp => {

    }, error => {
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

}
