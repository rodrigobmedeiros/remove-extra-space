import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'remove-extra-space';
  message = '';
  convertedMessage = '';

  removeSpaces() {
    this.convertedMessage = this.message.replace('  ', ' ');
  }
}
