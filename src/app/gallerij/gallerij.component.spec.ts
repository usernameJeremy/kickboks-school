import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerijComponent } from './gallerij.component';

describe('GallerijComponent', () => {
  let component: GallerijComponent;
  let fixture: ComponentFixture<GallerijComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerijComponent]
    });
    fixture = TestBed.createComponent(GallerijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
