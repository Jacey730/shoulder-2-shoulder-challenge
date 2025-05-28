import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { ShareCountryDataService } from '../../../../shared/services/share-country-data.service';

@Component({
  selector: 'app-new-country',
  imports: [ReactiveFormsModule, Select, InputText],
  templateUrl: './new-country.component.html',
  styleUrl: './new-country.component.css'
})
export class NewCountryComponent implements OnInit {
  uniqueRegions: String[] = [];
  newCountryForm: FormGroup;

  constructor(private fb: FormBuilder, private shareCountryDataService: ShareCountryDataService) {
    this.newCountryForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      flag: ['', Validators.compose([Validators.required, this.urlValidator()])],
      region: ['', Validators.required],
      population: [,Validators.compose([Validators.required, this.nonZeroValidator()])]
    })
  }

  ngOnInit() {
    this.shareCountryDataService.uniqueRegions.subscribe(uniqueRegions => {
      console.log(uniqueRegions);
    })
  }

  onSubmit() {}

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
        return {nonZero: true};
      } else {
        return null;
      }
    }
  }


  getUniqueRegions() {

  }
}
