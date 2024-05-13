import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedInfoComponent } from './breed-info.component';

describe('BreedInfoComponent', () => {
  let component: BreedInfoComponent;
  let fixture: ComponentFixture<BreedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
