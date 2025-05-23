import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Select } from 'primeng/select';
import { ShareCountryDataService } from '../../shared/services/share-country-data.service';

@Component({
  selector: 'app-new-country',
  imports: [ReactiveFormsModule, Select],
  templateUrl: './new-country.component.html',
  styleUrl: './new-country.component.css'
})
export class NewCountryComponent implements OnInit {
  uniqueRegions: String[] = [];
  newCountryForm: FormGroup;

   constructor(private fb: FormBuilder, private shareCountryDataService: ShareCountryDataService) {
    this.newCountryForm = this.fb.group({
      name: ['', Validators.required],
      flag: ['', Validators.required],
      region: ['', Validators.required],
      population: [Validators.required]
    })
   }

   ngOnInit() {
    this.shareCountryDataService.uniqueRegions.subscribe(uniqueRegions => {
      console.log(uniqueRegions);
    })
   }

   onSubmit() {}

   getUniqueRegions() {

   }
}
