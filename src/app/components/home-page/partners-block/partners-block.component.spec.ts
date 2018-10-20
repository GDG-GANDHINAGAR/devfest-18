import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersBlockComponent } from './partners-block.component';

describe('PartnersBlockComponent', () => {
  let component: PartnersBlockComponent;
  let fixture: ComponentFixture<PartnersBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
