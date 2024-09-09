import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portal-Chamber-Widget';
  day: Date = new Date();
  progress = 15;

  constructor() {
    setInterval(() => {
      this.day = new Date();
    }, 100);
  }
}
