import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { Dialog } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { CountryData } from '../../../../shared/services/country-data.service';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-new-country',
  imports: [ReactiveFormsModule, Select, InputText, Dialog, Button, InputNumber, Message],
  templateUrl: './new-country.component.html',
  styleUrl: './new-country.component.css'
})
export class NewCountryComponent {
  @Input() uniqueRegions:  any
  @Output() showNewCountryButton = new EventEmitter<boolean>();
  @Output() passNewCountry = new EventEmitter<any>();
  
  visible: boolean = true;
  newCountryForm: FormGroup;
  newCountry: CountryData = {
    name: {
      common: ''
    },
    flags: {
      png: ''
    },
    region: '',
    population: ''
  };

  constructor(private fb: FormBuilder) {
    this.newCountryForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      flag: ['', Validators.compose([Validators.required, this.urlValidator()])],
      region: ['', Validators.required],
      population: [,Validators.compose([Validators.required, this.nonZeroValidator()])]
    })
  }

  closeDialog () {
      let newCountryShown = false;
      this.showNewCountryButton.emit(newCountryShown);
  }

  urlValidator(): ValidatorFn {
    return (control: AbstractControl) : {[key: string]: any} | null => {
      try {
        new URL(control.value);
        return null;
      } catch (_) {
        return { invalidUrl: true};
      }
    }
  }

  nonZeroValidator(): ValidatorFn {
    return (control: AbstractControl) : {[key: string]: any} | null => {
      if (Number(control.value) < 0) {
        return {negative: true};
      } else {
        return null;
      }
    }
  }

  onSubmit() {
    this.newCountry.name.common = this.newCountryForm.get('name')?.value;
    this.newCountry.flags.png = this.newCountryForm.get('flag')?.value;
    this.newCountry.region = this.newCountryForm.get('region')?.value;
    this.newCountry.population = this.newCountryForm.get('population')?.value;
    this.passNewCountry.emit(this.newCountry);
  }
}
