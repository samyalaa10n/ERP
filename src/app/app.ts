import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./shared/components/button/button";

import { SidebarComponent } from "./layout/sidebar/sidebar";
import { Navbar } from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Navbar, SidebarComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ERP');
}
