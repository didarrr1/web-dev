import {Component} from '@angular/core';
import {UpperCasePipe,LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `{{ quitemessage | lowercase }} `,
  imports: [LowerCasePipe],
})
export class App {
   quitemessage = 'we thinK yOu Are Doing Great!';
}
