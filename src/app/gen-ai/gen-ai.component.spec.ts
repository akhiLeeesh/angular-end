import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenAiComponent } from './gen-ai.component';

describe('GenAiComponent', () => {
  let component: GenAiComponent;
  let fixture: ComponentFixture<GenAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenAiComponent]
    });
    fixture = TestBed.createComponent(GenAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
