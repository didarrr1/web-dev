import {Component} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
   template: `
    <h1>Hello</h1>
    <p>Welcome to Angular!</p>
    
    <app-user [name]="'Simran'" />
    
    <hr>
    
    <h2>Server Status</h2>
    @if (isServerRunning) {
      <p>✅ Yes, the server is running</p>
    } @else {
      <p>❌ No, the server is not running</p>
    }
  `,
  imports: [User],
})
export class App {
  isServerRunning = true;
}
