import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptionsComponent } from './interceptions.component';

describe('InterceptionsComponent', () => {
  let component: InterceptionsComponent;
  let fixture: ComponentFixture<InterceptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
