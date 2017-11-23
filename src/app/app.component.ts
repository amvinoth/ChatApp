import { Component } from '@angular/core';
import { AuthService } from './auth-service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
export class AppComponent {
  title = 'my app';
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
