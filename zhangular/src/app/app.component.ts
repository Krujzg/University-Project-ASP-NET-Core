import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zhangular';

  constructor(router: Router) {
    const token = sessionStorage.getItem('token');
    if (token == null || token.length < 10) {
      router.navigate(['/login']);
    } else {
      router.navigate(['/tevekenyseg']);
    }
  }
}
