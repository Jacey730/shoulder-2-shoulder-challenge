import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionFilterDropdownComponent } from './region-filter-dropdown.component';

describe('RegionFilterDropdownComponent', () => {
  let component: RegionFilterDropdownComponent;
  let fixture: ComponentFixture<RegionFilterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionFilterDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
