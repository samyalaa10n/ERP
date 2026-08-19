import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  Titel = signal<any>(null);
  setTitel(value: any) {
    this.Titel.set(value);
  }
  getTitel() {
    return this.Titel();
  }
  clearTitel() {
    this.Titel.set(null);
  }
  
  SubTitel = signal<any>(null);
  setSubTitel(value: any) {
    this.SubTitel.set(value);
  }
  getSubTitel() {
    return this.SubTitel();
  }
  clearSubTitel() {
    this.SubTitel.set(null);
  }
}