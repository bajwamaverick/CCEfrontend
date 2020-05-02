import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagetracingComponent } from './messagetracing.component';

describe('MessagetracingComponent', () => {
  let component: MessagetracingComponent;
  let fixture: ComponentFixture<MessagetracingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagetracingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagetracingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
