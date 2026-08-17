import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from "primeng/select";

@Component({
  selector: 'app-multi-select',
  imports: [FormsModule],
  templateUrl: './multi-select.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './multi-select.scss',
})
export class MultiSelect {

}
