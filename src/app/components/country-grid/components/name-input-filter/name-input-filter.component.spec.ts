import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputFilterComponent } from './name-input-filter.component';

describe('NameInputFilterComponent', () => {
  let component: NameInputFilterComponent;
  let fixture: ComponentFixture<NameInputFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameInputFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameInputFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
