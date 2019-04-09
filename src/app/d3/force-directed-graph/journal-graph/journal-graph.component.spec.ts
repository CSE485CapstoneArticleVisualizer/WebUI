import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalGraphComponent } from './journal-graph.component';

describe('JournalGraphComponent', () => {
  let component: JournalGraphComponent;
  let fixture: ComponentFixture<JournalGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
