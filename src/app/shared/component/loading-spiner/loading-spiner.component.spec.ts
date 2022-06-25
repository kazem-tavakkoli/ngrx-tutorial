import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinerComponent } from './loading-spiner.component';

describe('LoadingSpinerComponent', () => {
  let component: LoadingSpinerComponent;
  let fixture: ComponentFixture<LoadingSpinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSpinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
