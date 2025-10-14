import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Second } from "./second/second";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Second],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-101');
}
