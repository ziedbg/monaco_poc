import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isNightMode = false;

  toggleTheme() {
    this.isNightMode = !this.isNightMode;
    document.body.classList.toggle('night-mode');
  }
}
