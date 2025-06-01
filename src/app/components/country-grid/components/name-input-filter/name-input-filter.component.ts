import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-input-filter',
  imports: [InputText, FormsModule],
  templateUrl: './name-input-filter.component.html',
  styleUrl: './name-input-filter.component.css'
})
export class NameInputFilterComponent {
  @Input() countryData: any;
  @Output() passNameInput = new EventEmitter<any>();

  nameInput: string = '';

  sendNameInput(name: string) {
    this.passNameInput.emit(name)
  }
}
