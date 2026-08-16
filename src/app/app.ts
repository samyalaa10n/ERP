import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./shared/components/button/button";
import { Navbar } from "./layout/navbar/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Button, RouterOutlet, Navbar],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ERP');
}
