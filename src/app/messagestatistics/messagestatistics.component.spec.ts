import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagestatisticsComponent } from './messagestatistics.component';

describe('MessagestatisticsComponent', () => {
  let component: MessagestatisticsComponent;
  let fixture: ComponentFixture<MessagestatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagestatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagestatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
