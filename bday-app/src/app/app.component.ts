import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  candles: number[] = Array(23).fill(0);

  ngOnInit(): void {
    this.calculateCountdown();
    setInterval(() => {
      this.calculateCountdown();
    }, 1000);
  }

  calculateCountdown(): void {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), 2, 31); // March is 2 (0-based index)

    if (today.getMonth() > 2 || (today.getMonth() === 2 && today.getDate() > 31)) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const difference = nextBirthday.getTime() - today.getTime();
    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }
}
