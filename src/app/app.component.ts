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

  activeList: boolean[] = [];

  constructor() {
    setInterval(() => {
      this.day = new Date();
    }, 100);
    this.generateActiveList();
  }

  isActiveIcon(index: number) {
    return this.activeList[index];
  }

  generateActiveList() {
    this.activeList = [];
    for (let i = 0; i < 15; i++) {
      this.activeList.push(Math.random() >= 0.5);
    }
  }
}
