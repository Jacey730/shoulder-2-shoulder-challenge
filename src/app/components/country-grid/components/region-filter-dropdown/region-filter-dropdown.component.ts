import { Component, Input, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-region-filter-dropdown',
  imports: [FormsModule, MultiSelectModule],
  templateUrl: './region-filter-dropdown.component.html',
  styleUrl: './region-filter-dropdown.component.css'
})

export class RegionFilterDropdownComponent implements OnInit {
  @Input() regions = signal<Array<String>>([]);
  selectedRegion = signal('')

  ngOnInit(): void {
    
  }
}
