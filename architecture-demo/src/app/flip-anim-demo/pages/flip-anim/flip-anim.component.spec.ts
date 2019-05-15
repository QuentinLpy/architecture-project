import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipAnimComponent } from './flip-anim.component';

describe('FlipAnimComponent', () => {
  let component: FlipAnimComponent;
  let fixture: ComponentFixture<FlipAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlipAnimComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
