import { Component } from '@angular/core';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invoice-mgmt-app';
  constructor(public errorService : ErrorService){}
}
