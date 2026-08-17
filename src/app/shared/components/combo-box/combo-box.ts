import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';

import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { Select } from 'primeng/select';

@Component({
  selector: 'app-combo-box',
  standalone: true,
  imports: [Select, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboBox),
      multi: true
    }
  ],
  templateUrl: './combo-box.html',
  styleUrl: './combo-box.scss',
})
export class ComboBox implements ControlValueAccessor {

  @Input() options: any[]= [];
  @Input() optionLabel = '';
  @Input() optionValue = '';
  @Input() placeholder = '';
  @Input() showClear = false;
  @Input() selectedValue: any = null;
  @Output() selectedValuesChange = new EventEmitter<any>();


  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // لو محتاج disabled
  }

  valueChanged(value: any): void {
    this.selectedValue = value;

    this.onChange(value);
    this.onTouched();

    this.selectedValuesChange.emit(value);
  }

  ngOnInit() {
    console.log(
      'selectedValue',
      this.selectedValue,
      this.options
    );
  }
}