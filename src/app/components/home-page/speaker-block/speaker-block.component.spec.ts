import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerBlockComponent } from './speaker-block.component';

describe('SpeakerBlockComponent', () => {
  let component: SpeakerBlockComponent;
  let fixture: ComponentFixture<SpeakerBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
