import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGraphComponent } from './article-graph.component';

describe('ArticleGraphComponent', () => {
  let component: ArticleGraphComponent;
  let fixture: ComponentFixture<ArticleGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
