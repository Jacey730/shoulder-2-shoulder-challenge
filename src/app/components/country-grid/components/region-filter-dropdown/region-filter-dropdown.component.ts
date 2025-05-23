import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-region-filter-dropdown',
  imports: [FormsModule, MultiSelectModule],
  templateUrl: './region-filter-dropdown.component.html',
  styleUrl: './region-filter-dropdown.component.css'
})

export class RegionFilterDropdownComponent {
  @Input() uniqueRegions:  any
  @Output() selectedRegionsEvent = new EventEmitter<Array<String>>();

  selectedRegions: String[] = [];

  updateSelectedRegions() {
    this.selectedRegionsEvent.emit(this.selectedRegions);
  }
}
