import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Side } from "./side/side";
import { Container } from "./container/container";
import { Foot } from "./foot/foot";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Side, Container, Foot],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-101');
}
